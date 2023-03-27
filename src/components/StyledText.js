import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

import { colors, fonts } from '../styles';

function applyGeneralStyles({
    style,
    bold,
    light,
    white,
    underline,
    hCenter,
    lineThrough,
    color,
    size,
}) {
    return [
        style && style,
        bold && styles.bold,
        light && styles.light,
        white && styles.white,
        underline && styles.underline,
        hCenter && { textAlign: 'center' },
        lineThrough && styles.lineThrough,
        color && { color },
        size && { fontSize: size },
    ];
}

export function Text(props) {
    const finalStyle = [styles.default, ...applyGeneralStyles(props)];
    return <RNText {...props} style={finalStyle} />
}

export function Title(props) {
    const finalStyle = [
        styles.default,
        styles.title,
        ...applyGeneralStyles(props),
    ];

    return <RNText {...props} style={finalStyle} />;
}

export function Caption(props) {
    const finalStyle = [
        styles.default,
        styles.caption,
        ...applyGeneralStyles(props),
    ];

    return <RNText {...props} style={finalStyle} />;
}

const styles = StyleSheet.create({
    default: {
        fontFamily: fonts.primary,
    },
    name: {
        fontFamily: fonts.appName,
        fontSize: 24,
    },
    homeTitle: {
        fontSize: 18,
        color: `linear-gradient(to left, ${colors.textGradientStart}, ${colors.textGradientEnd})`,
    },
    caption: {
        fontSize: 13,
    },
    underline: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: 'black',
    },
    lineThrough: {
        textDecorationLine: 'line-through',
    },
    white: {
        color: 'white',
    },
});