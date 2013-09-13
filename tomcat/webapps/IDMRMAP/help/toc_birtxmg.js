function updateMenu_birtxmg() {
  if ((parent.theMenu) && (parent.theMenu.amBusy == false))
  {
    var level0ID = parent.theMenu.currentSubRoot;
    var level1ID;
    var level2ID;
    var level3ID;
    var level4ID;
    level2ID = parent.theMenu.findEntry('/birtxmg.html', 'url', 'right');
    if ((level2ID != -1) && (parent.theMenu.entry[level2ID].FirstChild < 0))
    {
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Getting to Know the Roles Integrator Interface", "../bj17zi6.html", "zHTML xD.0000.0000.0001.0001.", "Getting to Know the Roles Integrator Interface");
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Terminology", "../bj1pi80.html", "zHTML xD.0000.0000.0001.0002.", "Terminology");
      parent.theMenu.reload();
    }
  } else {
     setTimeout("updateMenu_birtxmg();", 100);
  }
}

updateMenu_birtxmg();
