declare module AmCharts {
    class AmAngularGauge extends AmChart {
        constructor();
        addAxis(axis: GaugeAxis): void;
        addArrow(arrow: GaugeArrow): void;
    }

    class GaugeArrow {
        nailRadius: number;
        innerRadius: number;
        color: string;
        setValue(val: number): void;
    }

    class GaugeBand {
        startValue: number;
        endValue: number;
        color: string;
        innerRadius: string;
    }

    class GaugeAxis extends ValueAxis {
        startValue: number;
        endValue: number;
        gridinside: boolean;
        tickColor: string;
        tickThickness: number;
        bottomTextColor: string;
        bottomTextFontSize: number;
        bottomTextBold: boolean;
        bands: GaugeBand[];
        bottomTextYOffset: number;
        setBottomText(text: string): void;
    }
} 
