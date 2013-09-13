function updateMenu_birty0m() {
  if ((parent.theMenu) && (parent.theMenu.amBusy == false))
  {
    var level0ID = parent.theMenu.currentSubRoot;
    var level1ID;
    var level2ID;
    var level3ID;
    var level4ID;
    level2ID = parent.theMenu.findEntry('/birty0m.html', 'url', 'right');
    if ((level2ID != -1) && (parent.theMenu.entry[level2ID].FirstChild < 0))
    {
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Filtering Lists", "../bj1pymk.html", "zHTML xD.0000.0000.0004.0001.", "Filtering Lists");
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Sorting Lists", "../bj23jd1.html", "zHTML xD.0000.0000.0004.0002.", "Sorting Lists");
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Refreshing Lists", "../bj1qx6p.html", "zHTML xD.0000.0000.0004.0003.", "Refreshing Lists");
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Adjusting the Width of the Roles and Mapping Lists", "../bj8db50.html", "zHTML xD.0000.0000.0004.0004.", "Adjusting the Width of the Roles and Mapping Lists");
      parent.theMenu.reload();
    }
  } else {
     setTimeout("updateMenu_birty0m();", 100);
  }
}

updateMenu_birty0m();
