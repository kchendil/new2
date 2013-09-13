function updateMenu_bookinfo() {
  if ((parent.theMenu) && (parent.theMenu.amBusy == false))
  {
    var level0ID = parent.theMenu.currentSubRoot;
    var level1ID;
    var level2ID;
    var level3ID;
    var level4ID;
    level1ID = parent.theMenu.findEntry('/bookinfo.html', 'url', 'right');
    if (level1ID == -1)
    {
      level1ID = parent.theMenu.addChild(level0ID, "", "Novell Roles Integrator Help", "../bookinfo.html", "zFLDR xB.0000.0000.", "Novell Roles Integrator Help");
      level2ID = parent.theMenu.addChild(level1ID, "Folder", "Getting Started", "../birtxmg.html", "zFLDR xC.0000.0000.0001.", "Getting Started");
      parent.theMenu.entry[level2ID].FirstChild = -2;
      parent.theMenu.entry[level2ID].onToggle = 'parent.theMenu.loadScript("../birtxmg.html","../toc_birtxmg.html", true)';
      level2ID = parent.theMenu.addChild(level1ID, "Folder", "Mapping Roles", "../birtz21.html", "zFLDR xC.0000.0000.0002.", "Mapping Roles");
      parent.theMenu.entry[level2ID].FirstChild = -2;
      parent.theMenu.entry[level2ID].onToggle = 'parent.theMenu.loadScript("../birtz21.html","../toc_birtz21.html", true)';
      level2ID = parent.theMenu.addChild(level1ID, "Folder", "Managing Roles", "../biru23y.html", "zFLDR xC.0000.0000.0003.", "Managing Roles");
      parent.theMenu.entry[level2ID].FirstChild = -2;
      parent.theMenu.entry[level2ID].onToggle = 'parent.theMenu.loadScript("../biru23y.html","../toc_biru23y.html", true)';
      level2ID = parent.theMenu.addChild(level1ID, "Folder", "Managing Lists", "../birty0m.html", "zFLDR xC.0000.0000.0004.", "Managing Lists");
      parent.theMenu.entry[level2ID].FirstChild = -2;
      parent.theMenu.entry[level2ID].onToggle = 'parent.theMenu.loadScript("../birty0m.html","../toc_birty0m.html", true)';
      level2ID = parent.theMenu.addChild(level1ID, "Folder", "Troubleshooting", "../biru1li.html", "zFLDR xC.0000.0000.0005.", "Troubleshooting");
      parent.theMenu.entry[level2ID].FirstChild = -2;
      parent.theMenu.entry[level2ID].onToggle = 'parent.theMenu.loadScript("../biru1li.html","../toc_biru1li.html", true)';
      level2ID = parent.theMenu.addChild(level1ID, "Document", "Legal Notices", "../legal.html", "zHTML xC.0000.0000.0006.", "Legal Notices");
      parent.theMenu.entry[level1ID].setSelected(true);
      parent.theMenu.reload();
    }
  } else {
     setTimeout("updateMenu_bookinfo();", 100);
  }
}

updateMenu_bookinfo();
