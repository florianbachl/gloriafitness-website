export interface Package {
  title: string;
  features_short: string[];
  features_long: FeatureBlock[];
}

export interface FeatureBlock {
  title: string;
  text: TextBlock[];
}

export interface TextBlock {}
