//dynamic menu for Pathways (lc) - Palaeography klee v1.0
//Palaeography klee v1.1 fix on Opera5 and NS7 and IE cell layer.
function lcLoadMenus() {
  if (window.lc_menu_0) return;
  window.lc_menu_0 = new Menu("root",148,19,"Verdana, Arial, Helvetica, sans-serif",11,"#989874","#ffffff","#ffffff","#989874","left","middle",0,0,1000,0,0,true,true,true,15,true,true);
  lc_menu_0.addMenuItem("Document&nbsp;1","location='../doc1/default.htm'");
  lc_menu_0.addMenuItem("Document&nbsp;2","location='../doc2/default.htm'");
  lc_menu_0.addMenuItem("Document&nbsp;3","location='../doc3/default.htm'");
  lc_menu_0.bgImageUp="../images/dropbox_cell_d.gif";
  lc_menu_0.bgImageOver="../images/dropbox_cell_u.gif";
  lc_menu_0.fontWeight="bold";
  lc_menu_0.hideOnMouseOut=true;
  lc_menu_0.writeMenus();
}//dynamic menu for Pathways end
