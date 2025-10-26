// config/batteryData.ts

export interface BatteryModel {
  id: string;
  modelName: string;
  capacity: string;
  type: string;
  titleKey: string;
  descriptionKey: string;
  imagePath: string;
  systemTopologyImage: string;
  features: {
    icon: string;
    titleKey: string;
    descriptionKey?: string;
  }[];
  specifications: {
    category: string;
    items: {
      label: string;
      value: string;
    }[];
  }[];
}

export const batteryModels: BatteryModel[] = [
  {
    id: "b-sola-s",
    modelName: "bSolaS",
    capacity: "5.12kWh",
    type: "wallMounted",
    titleKey: "bSolaSTitle",
    descriptionKey: "bSolaSDescription",
    imagePath: "/battery-b-sola-5.jpg",
    systemTopologyImage: "/system-topology-b-sola-5.jpg",
    features: [
      {
        icon: "shield",
        titleKey: "upperCoverProtection",
      },
      {
        icon: "parallel",
        titleKey: "upTo16UnitsParallel",
      },
      {
        icon: "cycle",
        titleKey: "cycleLife6000",
      },
      {
        icon: "warranty",
        titleKey: "warranty10Years",
      },
      {
        icon: "address",
        titleKey: "wifiRemoteMonitoring",
      },
      {
        icon: "bms",
        titleKey: "BMA",
      },
    ],
    specifications: [
      {
        category: "Electric Data",
        items: [
          { label: "Nominal Energy (kWh)", value: "5.12" },
          { label: "Usable Energy (kWh)", value: "4.79" },
          { label: "Depth Of Discharge (DoD)", value: "95%" },
          { label: "Cell Type", value: "LFP (LiFePO4)" },
          { label: "Nominal Voltage (V)", value: "51.2" },
          { label: "Operating Voltage Range (V)", value: "44.8~56.8" },
          { label: "Max. Continuous Charge Current(A)", value: "100" },
          { label: "Max. Continuous Discharge Current(A)", value: "100" },
          { label: "Scalability", value: "16" },
        ],
      },
      {
        category: "General Data",
        items: [
          { label: "Weight (Kg / lbs.)", value: "50 / 110.23" },
          { label: "Dimensions (W × D × H) (mm / inch)", value: "510 x 510 x 166 / 20.08 x 20.08 x 6.54" },
          { label: "Operating Temperature (°C)", value: "0~ 55°C (Charge), -20~55°C (Discharge)" },
          { label: "Storage Temperature (°C)\nDelivery SOC State (20~40%)", value: ">1 Month: 0~35°C; ≤1 Month: -20~45°C" },
          { label: "Relative Humidity", value: "≤ 95%" },
          { label: "Altitude (m / ft)", value: "4000 / 13,123 (>2,000 / >6,561.68 derating)" },
          { label: "Protection Degree", value: "IP 20" },
          { label: "Installation Location", value: "Indoor" },
          { label: "Communication", value: "CAN, RS485, WiFi" },
          { label: "Display", value: "LED" },
          { label: "Certificates", value: "UN38.3, IEC61000-6-1/3" },
        ],
      },
    ],
  },
  {
    id: "b-sola-11",
    modelName: "bSola11",
    capacity: "11.7kWh",
    type: "wallMounted",
    titleKey: "bSola11Title",
    descriptionKey: "bSola11Description",
    imagePath: "/battery-b-sola-11.jpg",
    systemTopologyImage: "/system-topology-b-sola-11.jpg",
    features: [
      {
        icon: "battery",
        titleKey: "gradeALfpCell",
      },
      {
        icon: "shield",
        titleKey: "upperCoverProtection",
      },
      {
        icon: "parallel",
        titleKey: "upTo16UnitsParallel",
      },
      {
        icon: "cell",
        titleKey: "intelligentOta",
      },
      {
        icon: "cycle",
        titleKey: "cycleLife6000",
      },
      {
        icon: "wifi",
        titleKey: "wifiRemoteMonitoring",
      },
      {
        icon: "warranty",
        titleKey: "warranty10Years",
      },
    ],
    specifications: [
      {
        category: "Electric Data",
        items: [
          { label: "Nominal Energy (kWh)", value: "11.7" },
          { label: "Usable Energy (kWh)", value: "11.1" },
          { label: "Depth Of Discharge (DoD)", value: "95%" },
          { label: "Cell Type", value: "LFP (LiFePO4)" },
          { label: "Nominal Voltage (V)", value: "51.2" },
          { label: "Operating Voltage Range (V)", value: "44.8~56.8" },
          { label: "Recommended Charge/Discharge Current (A)", value: "150A" },
          { label: "Max. Charge Current (A, 25°C)", value: "200" },
          { label: "Max. Discharge Current (A, 25°C)", value: "200" },
          { label: "Scalability", value: "16" },
        ],
      },
      {
        category: "General Data",
        items: [
          { label: "Weight (Kg / lbs.)", value: "105 / 231.49" },
          { label: "Dimensions (W × D × H) (mm / inch)", value: "720 x 530 x 205 / 28.35 x 20.87 x 8.07" },
          { label: "Operating Temperature (°C)", value: "0~ 55°C (Charge), -20~55°C (Discharge)" },
          { label: "Storage Temperature (°C)\nDelivery SOC State (20~40%)", value: ">1 Month: 0~35°C; ≤1 Month: -20~45°C" },
          { label: "Relative Humidity", value: "≤ 95%" },
          { label: "Altitude (m / ft)", value: "4000 / 13,123 (>2,000 / >6,561.68 derating)" },
          { label: "Protection Degree", value: "IP20 / IP65" },
          { label: "Installation Location", value: "Indoor / Outdoor" },
          { label: "Communication", value: "CAN, RS485, WiFi" },
          { label: "Display", value: "LED" },
          { label: "Certificates", value: "UN38.3, IEC61000-6-1/3" },
        ],
      },
    ],
  },
  {
    id: "b-sola-16",
    modelName: "bSola16",
    capacity: "16kWh",
    type: "floorMounted",
    titleKey: "bSola16Title",
    descriptionKey: "bSola16Description",
    imagePath: "/battery-b-sola-16.jpg",
    systemTopologyImage: "/system-topology-b-sola-16.jpg",
    features: [
      {
        icon: "battery",
        titleKey: "gradeALfpCell",
      },
      {
        icon: "shield",
        titleKey: "upperCoverProtection",
      },
      {
        icon: "parallel",
        titleKey: "upTo16UnitsParallel",
      },
      {
        icon: "cell",
        titleKey: "intelligentOta",
      },
      {
        icon: "cycle",
        titleKey: "cycleLife6000",
      },
      {
        icon: "wifi",
        titleKey: "wifiRemoteMonitoring",
      },
      {
        icon: "warranty",
        titleKey: "warranty10Years",
      },
    ],
    specifications: [
      {
        category: "Electric Data",
        items: [
          { label: "Nominal Energy (kWh)", value: "16.07" },
          { label: "Usable Energy (kWh)", value: "15.27" },
          { label: "Depth Of Discharge (DoD)", value: "95%" },
          { label: "Cell Type", value: "LFP (LiFePO4)" },
          { label: "Nominal Voltage (V)", value: "51.2" },
          { label: "Operating Voltage Range (V)", value: "44.8~56.8" },
          { label: "Max. Continuous Charge Current(A)", value: "150" },
          { label: "Max. Continuous Discharge Current(A)", value: "150" },
          { label: "Scalability", value: "16" },
        ],
      },
      {
        category: "General Data",
        items: [
          { label: "Weight (Kg / lbs.)", value: "125 / 275.58" },
          { label: "Dimensions (W × D × H) (mm / inch)", value: "890 x 530 x 240 / 35.04 x 20.87 x 9.45" },
          { label: "Operating Temperature (°C)", value: "0~ 55°C (Charge), -20~55°C (Discharge)" },
          { label: "Storage Temperature (°C)\nDelivery SOC State (20~40%)", value: ">1 Month: 0~35°C; ≤1 Month: -20~45°C" },
          { label: "Relative Humidity", value: "≤ 95%" },
          { label: "Altitude (m / ft)", value: "4000 / 13,123 (>2,000 / >6,561.68 derating)" },
          { label: "Protection Degree", value: "IP20 / IP65" },
          { label: "Installation Location", value: "Indoor / Outdoor" },
          { label: "Communication", value: "CAN, RS485, WiFi" },
          { label: "Display", value: "LED" },
          { label: "Certificates", value: "UN38.3, IEC61000-6-1/3" },
        ],
      },
    ],
  },
];