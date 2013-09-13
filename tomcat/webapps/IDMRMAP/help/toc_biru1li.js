function updateMenu_biru1li() {
  if ((parent.theMenu) && (parent.theMenu.amBusy == false))
  {
    var level0ID = parent.theMenu.currentSubRoot;
    var level1ID;
    var level2ID;
    var level3ID;
    var level4ID;
    level2ID = parent.theMenu.findEntry('/biru1li.html', 'url', 'right');
    if ((level2ID != -1) && (parent.theMenu.entry[level2ID].FirstChild < 0))
    {
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Issues", "../bj24jll.html", "zHTML xD.0000.0000.0005.0001.", "Issues");
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Errors", "../bj24jpv.html", "zHTML xD.0000.0000.0005.0002.", "Errors");
      parent.theMenu.reload();
    }
  } else {
     setTimeout("updateMenu_biru1li();", 100);
  }
}

updateMenu_biru1li();
