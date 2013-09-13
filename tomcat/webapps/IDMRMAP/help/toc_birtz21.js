function updateMenu_birtz21() {
  if ((parent.theMenu) && (parent.theMenu.amBusy == false))
  {
    var level0ID = parent.theMenu.currentSubRoot;
    var level1ID;
    var level2ID;
    var level3ID;
    var level4ID;
    level2ID = parent.theMenu.findEntry('/birtz21.html', 'url', 'right');
    if ((level2ID != -1) && (parent.theMenu.entry[level2ID].FirstChild < 0))
    {
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Loading SAP Authorizations", "../bj1pyg1.html", "zHTML xD.0000.0000.0002.0001.", "Loading SAP Authorizations");
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Mapping Authorizations to Roles", "../birtzap.html", "zHTML xD.0000.0000.0002.0002.", "Mapping Authorizations to Roles");
      level3ID = parent.theMenu.addChild(level2ID, "Document", "Removing Mappings", "../bj2511f.html", "zHTML xD.0000.0000.0002.0003.", "Removing Mappings");
      parent.theMenu.reload();
    }
  } else {
     setTimeout("updateMenu_birtz21();", 100);
  }
}

updateMenu_birtz21();
