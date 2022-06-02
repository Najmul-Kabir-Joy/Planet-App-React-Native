import { Text as RNText, StyleSheet } from 'react-native';
import { textPresets, TextPresetTypes } from '../../theme/presets/text.presets';

interface TextComponentPropType {
  children: JSX.Element | string;
  textPreset?: 'default' | 'bold' | 'h1' | 'h2' | 'h3' | 'h4' | 'small';
  style: {};
}

const Text = ({
  children,
  textPreset = 'default',
  style,
}: TextComponentPropType) => {
  const textStyle = StyleSheet.compose(
    textPresets[textPreset] as TextPresetTypes,
    style
  );
  return <RNText style={textStyle}>{children}</RNText>;
};

export default Text;
