import React from 'react';
import { styled } from '@stitches/react';
import { violet } from '@radix-ui/colors';
import * as LabelPrimitive from '@radix-ui/react-label';

export const Label = styled(LabelPrimitive.Root, {
    fontSize: 13,
    lineHeight: 1,
    marginBottom: 10,
    color: violet.violet12,
    display: 'block',
});