PP.EasyTuneNumberArrayWidgetSetup = class EasyTuneNumberArrayWidgetSetup extends PP.EasyTuneBaseWidgetSetup {

    constructor(arraySize) {
        super();

        this.myArraySize = arraySize;
    }

    _getBackPanelMinY() {
        return this.myStepPanelPosition[1] - this._mySideButtonDistanceFromBorder * 1.25 - this.mySideButtonBackgroundScale[1];
    }

    _getPivotZOffset() {
        return 0.00803713;
    }

    _initializeBuildSetupHook() {
        this.myIncreaseButtonText = "+";
        this.myDecreaseButtonText = "-";

        this._myValuePanelDistanceFromVariableLabelPanel = 0.055;
        this._myDistanceBetweenValues = this.mySideButtonBackgroundScale[1] * 2 + 0.015;

        this.myValuesPanelPosition = [0, this.myVariableLabelPanelPosition[1] - this._myValuePanelDistanceFromVariableLabelPanel, this._myPanelZOffset];

        this.myValueTextScale = PP.vec3_create(0.4, 0.4, 0.4);

        this.myValueCursorTargetPosition = PP.vec3_create(0, 0, 0);
        this.myValueCursorTargetPosition[2] = this._myColliderZOffset - this._myPanelZOffset;
        this.myValueCollisionExtents = PP.vec3_create(0.065, 0.02, 1);
        this.myValueCollisionExtents[2] = this.myCursorTargetCollisionThickness;

        this.myValuePanelsPositions = [];
        this.myValuePanelsPositions[0] = PP.vec3_create(0, 0, 0);
        for (let i = 1; i < this.myArraySize; i++) {
            this.myValuePanelsPositions[i] = this.myValuePanelsPositions[i - 1].slice(0);
            this.myValuePanelsPositions[i][1] -= this._myDistanceBetweenValues;
        }

        let valuePanelLastPosition = (this.myValuePanelsPositions[this.myArraySize - 1]) ? this.myValuePanelsPositions[this.myArraySize - 1][1] : 0;
        this.myStepPanelPosition = [0, this.myDisplayPanelPosition[1] + this.myValuesPanelPosition[1] + valuePanelLastPosition - this._myValuePanelDistanceFromVariableLabelPanel, this._myPanelZOffset];
        this.myStepTextScale = this.myLabelTextScale;
        this.myStepStartString = "Step: ";

        this.myStepCursorTargetPosition = PP.vec3_create(0, 0, 0);
        this.myStepCursorTargetPosition[2] = this._myColliderZOffset - this.myStepPanelPosition[2];
        this.myStepCollisionExtents = PP.vec3_create(0.065, 0.0175, 1);
        this.myStepCollisionExtents[2] = this.myCursorTargetCollisionThickness;
    }

    _initializeRuntimeSetupHook() {
        this.myTextHoverScaleMultiplier = PP.vec3_create(1.25, 1.25, 1.25);

        this.myEditThumbstickMinThreshold = 0.35;
        this.myStepMultiplierStepPerSecond = 2.25;
        this.myButtonEditDelay = 0;
    }
};