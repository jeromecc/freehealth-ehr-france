namespace.module('io.freehealth.prescriptions.labtests.fr.bizone', function (exports, require) {
    //var bz_affectionExoneranteHeaderTextEdit;
    //var bz_maladiesIntercurrentesHeaderTextEdit;
    var bz_bizoneCheckUi;
    var bz_bizoneCheckItem;
    var orderText;
    var bz_orderItem;
    var bz_orderUi;
    var bz_maladiesIntercurrentesItem;
    var bz_affectionExoneranteUi;
    var bz_maladiesIntercurrentesUi;
    var bz_rppsLineEdit;
    var bz_interHeaderUi;
    var bz_exoHeaderUi;
    var bz_current;
    var bz_htmlHeader = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\"><html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">p, li { white-space: pre-wrap; }</style></head><body style=\"font-family:'Cantarell'; font-size:11pt; font-weight:400; font-style:normal;\">";
    var bz_affectionExoneranteHeader = "<br/><hr/><p align=\"center\" style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">Prescriptions relatives au traitement de l'affection de longue durée reconnue (liste ou hors liste)<br />(AFFECTION EXONÉRANTE)</p><hr />";
    var bz_maladiesIntercurrentesHeader = "<hr /><p align=\"center\" style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">Prescriptions SANS RAPPORT avec l'affection de longue durée<br />(MALADIES INTERCURRENTES)</p><hr />";


    var bz_interHeaderItem;
    var bz_exoHeaderItem;
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
    var bz_frequentExoItem;
    var bz_hematoExoUi;
    var bz_hematoExoItem;
    var bz_coagExoUi;
    var bz_coagExoItem;
    var bz_electrolytesExoUi;
    var bz_electrolytesExoItem;
    var bz_kidneyExoUi;
    var bz_kidneyExoItem;
    var bz_protsExoUi;
    var bz_protsExoItem;
    var bz_liverExoUi;
    var bz_liverExoItem;
    var bz_metabolicExoUi;
    var bz_metabolicExoItem;
    var bz_tumorExoUi;
    var bz_tumorExoItem;
    var bz_ironExoUi;
    var bz_ironExoItem;
    var bz_prostateExoUi;
    var bz_prostateExoItem;
    var bz_vitaminsExoUi;
    var bz_vitaminsExoItem;
    var bz_biermerExoUi;
    var bz_biermerExoItem;
    var bz_thyroidExoItem;
    var bz_thyroidExoUi;
    var bz_serologiesExoUi;
    var bz_serologiesExoItem;
    var bz_prExoUi;
    var bz_prExoItem;
    //
    var item = [bz_frequentExoItem,
    bz_hematoExoItem,
    bz_coagExoItem,
    bz_electrolytesExoItem,
    bz_kidneyExoItem,
    bz_protsExoItem,
    bz_liverExoItem,
    bz_metabolicExoItem,
    bz_tumorExoItem,
    bz_ironExoItem,
    bz_prostateExoItem,
    bz_vitaminsExoItem,
    bz_biermerExoItem,
    bz_thyroidExoItem,
    bz_serologiesExoItem,
    bz_prExoItem];

  exports.extend({
    'setupUi': setupUi,
    'bz_onCheckChanged': bz_onCheckChanged,
    'bz_getUiElements' : bz_getUiElements
  });

                     function setupUi() {
                         bz_getUiElements();
                         bz_connectUiElements();
                         bz_onCheckChanged();
                     }


function bz_getUiElements() {
        //print("hello");
        freemedforms.forms.namespaceInUse = "";
        var formUi = freemedforms.forms.item("Subs::Tools::LabTests");
        freemedforms.forms.namespaceInUse = "Subs::Tools::LabTests";
        var ui = formUi.ui();
        bz_bizoneCheckUi = ui.findChild("bizoneCheckBox");
        bz_bizoneCheckItem = freemedforms.forms.item("Bizone::Check");
        bz_affectionExoneranteItem = freemedforms.forms.item("Affection::Exonerante");
        bz_maladiesIntercurrentesItem = freemedforms.forms.item("Maladies::Intercurrentes");
        bz_maladiesIntercurrentesUi = ui.findChild("maladiesIntercurrentesTextEdit");
        bz_interHeaderUi = ui.findChild("interHeaderLineEdit");
        bz_interHeaderItem = freemedforms.forms.item("Inter::Header");
        bz_exoHeaderUi = ui.findChild("exoHeaderLineEdit");
        bz_exoHeaderItem = freemedforms.forms.item("Exo::Header");
        bz_warningUi = ui.findChild("warningLineEdit");
        bz_bizoneCollapsibleGroupItem = freemedforms.forms.item("Bizone::Group");
        bz_bizoneCollapsibleGroupUi = ui.findChild("bizoneGroupBox");
        bz_frequentExoUi = ui.findChild("exoFrequentListView");
        bz_frequentExoItem = freemedforms.forms.item("Frequent::Exo");
        bz_hematoExoUi= ui.findChild("hemato_exo");
        bz_hematoExoItem = freemedforms.forms.item("Basics::Hematology::Exo");
        bz_coagExoUi= ui.findChild("coag_exo");
        bz_coagExoItem = freemedforms.forms.item("Basics::Coagulation::Exo");
        bz_electrolytesExoUi = ui.findChild("electrolytes_exo");
        bz_electrolytesExoItem = freemedforms.forms.item("Basics::Electrolytes::Exo");
        bz_kidneyExoUi = ui.findChild("kidney_exo");
        bz_kidneyExoItem = freemedforms.forms.item("Basics::Kidney::Exo");
        bz_protsExoUi = ui.findChild("prots_exo");
        bz_protsExoItem = freemedforms.forms.item("Basics::Proteins::Exo");
        bz_liverExoUi = ui.findChild("liver_exo");
        bz_liverExoItem = freemedforms.forms.item("Basics::Liver::Exo");
        bz_metabolicExoUi = ui.findChild("metabolic_exo");
        bz_metabolicExoItem = freemedforms.forms.item("Basics::Metabolic::Exo");
        bz_tumorExoUi = ui.findChild("tumor_exo");
        bz_tumorExoItem = freemedforms.forms.item("Basics::Cancer::Exo");
        bz_ironExoUi = ui.findChild("iron_exo");
        bz_ironExoItem = freemedforms.forms.item("Basics::Iron::Exo");
        bz_prostateExoUi = ui.findChild("prostate_exo");
        bz_prostateExoItem = freemedforms.forms.item("Basics::Prostate::Exo");
        bz_vitaminsExoUi = ui.findChild("vitamins_exo");
        bz_vitaminsExoItem = freemedforms.forms.item("Basics::Vitamins::Exo");
        bz_biermerExoUi = ui.findChild("biermer_exo");
        bz_biermerExoItem = freemedforms.forms.item("Basics::Biermer::Exo");
        bz_thyroidExoUi = ui.findChild("thyroid_exo");
        bz_thyroidExoItem = freemedforms.forms.item("Basics::Thyroid::Exo");
        bz_serologiesExoUi = ui.findChild("serologies_exo");
        bz_serologiesExoItem = freemedforms.forms.item("Basics::Serologies::Exo");
        bz_prExoUi = ui.findChild("pr_exo");
        bz_prExoItem = freemedforms.forms.item("Basics::RhumatoidPolyarth::Exo");
        bz_warningUi.visible = false;
        //bz_onCheckChanged();
    }

function bz_connectUiElements()
    {
        bz_bizoneCollapsibleGroupUi['toggled(bool)'].connect(this, bz_getUiElements);
        bz_bizoneCollapsibleGroupUi['toggled(bool)'].connect(this, bz_onCheckChanged);

    //bz_bizoneCheckUi['stateChanged(int)'].connect(this, bz_onCheckChanged);
    }

function bz_onCheckChanged()
{
    var checkValue = bz_bizoneCheckItem.checked;

    bz_warningUi.visible = false;
    bz_affectionExoneranteItem = freemedforms.forms.item("Affection::Exonerante");

    if (checkValue === false) {
        print("checkValue: ",checkValue);
        bz_interHeaderItem.currentText = "print";
        bz_exoHeaderItem.currentText = "";
        //bz_affectionExoneranteHeaderTextEdit.visible = false;
        //bz_maladiesIntercurrentesHeaderTextEdit.visible = false;
        bz_warningUi.visible = false;

        bz_current = bz_maladiesIntercurrentesItem.currentText;
        //var warningString = bz_warningItem.currentText;
        var warningString = bz_warningUi.text;
        // if (ALD order is not empty and warning lineedit is empty),
        // display a warning
        // Warning: empty TextEditor item currentText property returns "undefined"
        var warn;
        var warn;

        warn = !((typeof bz_frequentExoItem.currentUuid === "undefined")
                && (typeof bz_hematoExoItem.currentUuid === "undefined")
                && (typeof bz_coagExoItem.currentUuid === "undefined")
                && (typeof bz_electrolytesExoItem.currentUuid === "undefined")
                && (typeof bz_kidneyExoItem.currentUuid === "undefined")
                && (typeof bz_protsExoItem.currentUuid === "undefined")
                && (typeof bz_liverExoItem.currentUuid === "undefined")
                && (typeof bz_metabolicExoItem.currentUuid === "undefined")
                && (typeof bz_tumorExoItem.currentUuid === "undefined")
                && (typeof bz_ironExoItem.currentUuid === "undefined")
                && (typeof bz_prostateExoItem.currentUuid === "undefined")
                && (typeof bz_vitaminsExoItem.currentUuid === "undefined")
                && (typeof bz_biermerExoItem.currentUuid === "undefined")
                && (typeof bz_thyroidExoItem.currentUuid === "undefined")
                && (typeof bz_serologiesExoItem.currentUuid === "undefined")
                && (typeof bz_prExoItem.currentUuid === "undefined")
                && (typeof bz_affectionExoneranteItem.currentText === "undefined"));

        if (warn) {
            bz_warningUi.visible = true;
            if (bz_warningUi.text === "") {
                bz_warningUi.setText(warning);
            }
        }
     } else {
        // delete warning about the need to delete ALD order
        bz_warningUi.setText("");
        bz_warningUi.visible = false;

        // delete the interHeaderItem that triggers printing of non ALD (inter) order header
        bz_interHeaderItem.currentText = "";
        bz_exoHeaderItem.currentText = "print";
        }
}

function retranslateUi() {
        print("retransate");
        var lang = freemedforms.forms.currentLanguage;
}


});

// Setup Ui
namespace.io.freehealth.prescriptions.labtests.fr.bizone.setupUi();


