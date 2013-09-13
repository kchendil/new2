function updateMenu_biru23y() {
  if ((parent.theMenu) && (parent.theMenu.amBusy == false))
  {
    var level0ID = parent.theMenu.currentSubRoot;
    var level1ID;
    var level2ID;
    var level3ID;
    var level4ID;
    level2ID = parent.theMenu.findEntry('/biru23y.html', 'url', 'right');
    if ((level2ID != -1) && (parent.theMenu.entry[level2ID].FirstChild < 0))
    {
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Creating Roles", "../biru069.html", "zHTML xD.0000.0000.0003.0001.", "Creating Roles");
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Removing Roles", "../biru08f.html", "zHTML xD.0000.0000.0003.0002.", "Removing Roles");
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Editing Role Information", "../biru0bk.html", "zHTML xD.0000.0000.0003.0003.", "Editing Role Information");
      parent.theMenu.reload();
    }
  } else {
     setTimeout("updateMenu_biru23y();", 100);
  }
}

updateMenu_biru23y();
