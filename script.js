(function () {
  var names =  ["yaakov", "john", "jen", "jason", "paul", "frank", "larry", "paula", "laura", "jim"];
  for (var i=0; i < names.lenght;i++)
  {
    var firstletter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j')
    {
      byeSpeaker(names[i]);
    }}
})();
