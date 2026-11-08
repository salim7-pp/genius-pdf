/* Platform bridge — Développé par Salim Bouzenad */
(function () {
  window.PDFW_APP = true;
  var toB64 = function (blob) { return new Promise(function (res, rej) { var r = new FileReader(); r.onload = function () { res(String(r.result).split(',')[1]); }; r.onerror = rej; r.readAsDataURL(blob); }); };
  if (window.pdfw && window.pdfw.saveFile) {
    window.PDFW_SAVE = async function (blob, name) {
      var p = await window.pdfw.saveFile(name, new Uint8Array(await blob.arrayBuffer()));
      return p ? 'تم حفظ الملف في: ' + p : 'أُلغي الحفظ.';
    };
  } else if (window.PDFW_CAP && window.PDFW_CAP.isNative) {
    window.PDFW_SAVE = async function (blob, name) {
      var C = window.PDFW_CAP, data = await toB64(blob), saved = null;
      try { saved = await C.Filesystem.writeFile({ path: 'Genius PDF/' + name, data: data, directory: C.Directory.Documents, recursive: true }); } catch (e) {}
      var tmp = await C.Filesystem.writeFile({ path: name, data: data, directory: C.Directory.Cache });
      try { await C.Share.share({ title: name, files: [tmp.uri] }); } catch (e) {}
      return saved ? 'حُفظ الملف في Documents/Genius PDF' : 'الملف جاهز للمشاركة أو الحفظ.';
    };
  }
})();
