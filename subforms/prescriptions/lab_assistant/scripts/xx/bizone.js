namespace.module('com.freemedforms.prescriptions.labtests.fr.bizone', function (exports, require) {
    var bz_affectionExoneranteHeaderTextEdit;
    var bz_maladiesIntercurrentesHeaderTextEdit;
    var bz_bizoneCheckUi;
    var bz_bizoneCheckItem;
    var orderText;
    var bz_orderItem;
    var bz_orderUi;
    var bz_maladiesIntercurrentesItem;
    var bz_affectionExoneranteUi;
    var bz_maladiesIntercurrentesUi;
    var bz_rppsLineEdit;
    var bz_headerUi;
    var bz_current;
    var bz_htmlHeader = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\"><html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">p, li { white-space: pre-wrap; }</style></head><body style=\"font-family:'Cantarell'; font-size:11pt; font-weight:400; font-style:normal;\">";
    var bz_affectionExoneranteHeader = "<br/><hr/><p align=\"center\" style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">Prescriptions relatives au traitement de l'affection de longue durée reconnue (liste ou hors liste)<br />(AFFECTION EXONÉRANTE)</p><hr />";
    var bz_maladiesIntercurrentesHeader = "<hr /><p align=\"center\" style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">Prescriptions SANS RAPPORT avec l'affection de longue durée<br />(MALADIES INTERCURRENTES)</p><hr />";

   var bz_header ="<table border=\"1\" style=\" border-style:none; margin-top:6px; margin-bottom:6px; margin-left:6px; margin-right:6px;\" width=\"100%\" cellspacing=\"4\" cellpadding=\"4\" bgcolor=\"#ffffff\"><tr><td colspan=2 align=\"center\"><span style=\" font-family:'Sans Serif'; font-size:14pt;\">{{~User.Contact.FullAddress~}} </span><br><span style=\" font-family:'Sans Serif'; font-size:12pt;\">Tél {{~User.Contact.Tel1~}} </span><br><span style=\" font-family:'Sans Serif'; font-size:12pt;\">Fax {{~User.Contact.Fax~}} </span><br><span style=\" font-family:'Sans Serif'; font-size:12pt;\">Email {{~User.Contact.Mail~}} </span></td></tr><tr><td width=\"33%\"><span style=\" font-family:'Lucida Grande'; font-size:14pt;\">{{~User.Identity.FullName~}}</span><span style=\" font-family:'Lucida Grande'; font-size:13pt;\">{{~User.Professional.Specialties~}} </span><p><span style=\" font-family:'Code 128'; font-size:36pt;\">{{~User.Professional.Identifiants~}} </span></p><p><span style=\" font-family:'Sans Serif'; font-size:10pt;\">{{~User.Professional.Qualifications~}} </span></p></td><td colspan=\"2\"><p align=\"right\"><span style=\" font-family:'Lucida Grande'; font-size:13pt;\">[[DATE]]</span></p><p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Sans Serif'; font-size:9pt;\"><br /></p><p align=\"right\"><span style=\" font-family:'Sans Serif'; font-size:14pt;\">{{~Patient.Identity.FullName~}}</span></p><p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Lucida Grande'; font-size:13pt;\"><br /></p><p align=\"right\"><span style=\" font-family:'Sans Serif'; font-size:9pt;\">{{~Patient.Age.YearsOld~ ans}}</span></p></td></tr></table>";
    var bz_headerItem;
    var bz_radioItem;
    var bz_bizoneCollapsibleGroupItem;
    var bz_bizoneCollapsibleGroupUi;
    var bz_bizoneWarningLabelUi;
    var warning ="Vous devez retourner en mode bizone et effacer la prescription relative à l'ALD.";
    var originalAndWarning = "";
    var original= "";
    var bz_warningUi;
    var bz_warningItem;
    var bz_affectionExoneranteItem;
    var bz_frequentExoUi;
    var bz_hematoExoUi;
    var bz_coagExoUi;
    var bz_electrolytesExoUi;
    var bz_kidneyExoUi;
    var bz_protsExoUi;
    var bz_liverExoUi;
    var bz_metabolicExoUi;
    var bz_tumorExoUi;
    var bz_ironExoUi;
    var bz_prostateExoUi;
    var bz_vitaminsExoUi;
    var bz_biermerExoUi;
    var bz_thyroidExoUi;
    var bz_serologiesExoUi;
    var bz_prExoUi;

  exports.extend({
    'setupUi': setupUi,
    'bz_onCheckChanged': bz_onCheckChanged
  });

                     function setupUi() {
                         bz_getUiElements();
                         bz_connectUiElements();
                         bz_onCheckChanged();
                     }


function bz_getUiElements() {
        freemedforms.forms.namespaceInUse = "";
        var formUi = freemedforms.forms.item("Subs::Tools::LabTests");
        freemedforms.forms.namespaceInUse = "Subs::Tools::LabTests";
        var ui = formUi.ui();
        bz_bizoneCheckUi = ui.findChild("bizoneCheckBox");
        bz_bizoneCheckItem = freemedforms.forms.item("Bizone::Check");
        bz_affectionExoneranteItem = freemedforms.forms.item("Affection::Exonerante");
        bz_maladiesIntercurrentesItem = freemedforms.forms.item("Maladies::Intercurrentes");
        bz_maladiesIntercurrentesUi = ui.findChild("maladiesIntercurrentesTextEdit");
        bz_headerUi = ui.findChild("headerLineEdit");
        bz_headerItem = freemedforms.forms.item("Header");
        bz_warningUi = ui.findChild("warningLineEdit");
        //bz_warningItem = freemedforms.forms.item("Warning");
        bz_affectionExoneranteHeaderTextEdit = ui.findChild("affectionExoneranteHeaderTextEdit");
        bz_maladiesIntercurrentesHeaderTextEdit = ui.findChild("maladiesIntercurrentesHeaderTextEdit");
        bz_bizoneCollapsibleGroupItem = freemedforms.forms.item("Bizone::Group");
        bz_bizoneCollapsibleGroupUi = ui.findChild("bizoneGroupBox");
        bz_frequentExoUi = ui.findChild("exoFrequentListView");
        bz_hematoExoUi= ui.findChild("hemato_exo");
        bz_coagExoUi= ui.findChild("coag_exo");
        bz_electrolytesExoUi = ui.findChild("electrolytes_exo");
        bz_kidneyExoUi = ui.findChild("kidney_exo");
        bz_protsExoUi = ui.findChild("prots_exo");
        bz_liverExoUi = ui.findChild("liver_exo");
        bz_metabolicExoUi = ui.findChild("metabolic_exo");
        bz_tumorExoUi = ui.findChild("tumor_exo");
        bz_ironExoUi = ui.findChild("iron_exo");
        bz_prostateExoUi = ui.findChild("prostate_exo");
        bz_vitaminsExoUi = ui.findChild("vitamins_exo");
        bz_biermerExoUi = ui.findChild("biermer_exo");
        bz_thyroidExoUi = ui.findChild("thyroid_exo");
        bz_serologiesExoUi = ui.findChild("serologies_exo");
        bz_prExoUi = ui.findChild("pr_exo");

        bz_warningUi.visible = false;
    }

function bz_connectUiElements()
    {
        bz_bizoneCollapsibleGroupUi['toggled(bool)'].connect(this, bz_onCheckChanged);
        //bz_bizoneCheckUi['stateChanged(int)'].connect(this, bz_onCheckChanged);
    }

function bz_onCheckChanged()
{
    print("function bz_onCheckChanged()");
    print(bz_warningUi);
    print(bz_warningUi.visible);
    bz_warningUi.visible = false;
    print(bz_affectionExoneranteItem.currentText);
    bz_affectionExoneranteItem = freemedforms.forms.item("Affection::Exonerante");
    print("freemedforms.uiTools.selectedItems(bz_frequentExoUi); -> ", freemedforms.uiTools.selectedItems(bz_frequentExoUi));
    bz_getUiElements();

    //print("bz_bizoneCollapsibleGroupItem", bz_bizoneCollapsibleGroupItem);
    //print("bz_bizoneCollapsibleGroupItem.currentUuid", bz_bizoneCollapsibleGroupItem.currentUuid);
    //print("bz_bizoneCollapsibleGroupItem.enabled", bz_bizoneCollapsibleGroupItem.enabled);
    //print("bz_bizoneCollapsibleGroupItem.checked", bz_bizoneCollapsibleGroupItem.checked);
    //print("bz_bizoneCollapsibleGroupItem.currentValue", bz_bizoneCollapsibleGroupItem.currentValue);
    //print("bz_bizoneCollapsibleGroupItem.currentText", bz_bizoneCollapsibleGroupItem.currentText);
    //print ("bz_bizoneCheckItem.enabled: ", bz_bizoneCheckItem.enabled);
    //print ("bz_bizoneCheckItem.checked: ", bz_bizoneCheckItem.checked);
    //print ("bz_bizoneCheckItem.currentUuid: ", bz_bizoneCheckItem.currentUuid);
    //print ("bz_bizoneCheckItem.currentValue: ", bz_bizoneCheckItem.currentValue);
    //print ("bz_bizoneCheckItem.currentText: ", bz_bizoneCheckItem.currentText);
    //print ("typeof bz_bizoneCheckItem.checked", typeof bz_bizoneCheckItem.check);
    var checkValue = bz_bizoneCheckItem.checked;
    if (checkValue === false) {
        print("checkValue: ",checkValue);
        bz_headerItem.currentText = "print";
        bz_affectionExoneranteHeaderTextEdit.visible = false;
        bz_maladiesIntercurrentesHeaderTextEdit.visible = false;
        bz_warningUi.visible = false;

        bz_current = bz_maladiesIntercurrentesItem.currentText;
        //var warningString = bz_warningItem.currentText;
        var warningString = bz_warningUi.text;
        // if (ALD order is not empty and warning lineedit is empty),
        // display a warning
        // Warning: empty TextEditor item currentText property returns "undefined"
        print("(freemedforms.uiTools.selectedItems(bz_frequentExoUi) === \"\"",
                    (freemedforms.uiTools.selectedItems(bz_frequentExoUi) === ""));
        print("(freemedforms.uiTools.selectedItems(bz_frequentExoUi) == \"\"",
                    (freemedforms.uiTools.selectedItems(bz_frequentExoUi) == ""));
        var warn;
        warn = !((freemedforms.uiTools.selectedItems(bz_frequentExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_hematoExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_coagExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_electrolytesExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_kidneyExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_protsExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_liverExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_metabolicExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_tumorExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_ironExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_prostateExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_vitaminsExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_biermerExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_thyroidExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_serologiesExoUi) == "")
                && (freemedforms.uiTools.selectedItems(bz_prExoUi) == "")
                && (typeof bz_affectionExoneranteItem.currentText === "undefined"));

        if (warn) {
            bz_warningUi.visible = true;
            if (bz_warningUi.text === "") {
                bz_warningUi.setText(warning);
            }
        }
     } else {
        print ("checkValue: ", checkValue);
        // delete warning about the need to delete ALD order
        //bz_warningItem.currentText = "";
        bz_warningUi.setText("");
        bz_warningUi.visible = false;

        // delete the headerItem that triggers printing of non ALD order header
        bz_headerItem.currentText = "";

        // hide ALD headers
        bz_affectionExoneranteHeaderTextEdit.visible = true;
        bz_maladiesIntercurrentesHeaderTextEdit.visible = true;
        }
}

function retranslateUi() {
        print("retransate");
        var lang = freemedforms.forms.currentLanguage;
}


/*!
  This function is called whenever the user changes the text of "intercurrentes maladies"
  If bizone is checked, set header item to empty string to prevent printing of normal header order
  If bizone is not checked, set header item to "print" to trigger printing of normal order header
*/
function bz_header()
{
    var checkValue = bz_bizoneCheckItem.checked;
    if (checkValue === false) {
        bz_headerItem.currentText = "print";
    } else {
        bz_headerItem.currentText = "";
    }
}

});

// Setup Ui
namespace.com.freemedforms.prescriptions.labtests.fr.bizone.setupUi();



