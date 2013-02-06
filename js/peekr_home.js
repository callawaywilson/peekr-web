$(document).ready(function() {
  $(".peekr").attachPeekr();
  $("#peekr-preview").bind('submit', previewPeek);
});

function previewPeek(e) {
  e.preventDefault();
  var val = $("#peekrUrl").val();
  if (!val || /^\s*$/.test(val)) return false;
  startPeek();
  Peekr.data(val, function(data) {
    endPeek();
    renderPeekTooltip(data);
    renderPeekData(data);
  });
  return false;
}

function startPeek() {
  $(".btn-peek").addClass("disabled");
  $(".btn-peek").text("Peeking...");
}

function endPeek() {
  $(".btn-peek").removeClass("disabled");
  $(".btn-peek").text("Peek!");
}

function renderPeekTooltip(data) {
  $(".peekr-preview-tooltip").html("<div class='_peekr' style='position:relative'>"+Peekr.dataHtml(data)+"</div>");
}

function renderPeekData(data) {
  $(".peekr-preview-data").html("<pre>"+JSON.stringify(data, null, '\t')+"</pre>");
}