/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { EuiLink } from '@elastic/eui';
import { injectI18n } from '@kbn/i18n/react';
import { Popover } from '../popover';
import { ColorPicker } from '../color_picker';
import { ColorDot } from '../color_dot';
import { WorkpadColorPicker } from '../workpad_color_picker/';

export const ColorPickerMiniUI = ({ onChange, value, anchorPosition, colors, intl }) => {
  const button = handleClick => (
    <EuiLink
      style={{ fontSize: 0 }}
      onClick={handleClick}
      aria-label={intl.formatMessage({
        id: 'xpack.canvas.colorPickerMini.openColorPanel',
        defaultMessage: 'Open panel to choose a color',
      })}
    >
      <ColorDot value={value} clickable />
    </EuiLink>
  );

  return (
    <Popover
      id="color-picker-mini-popover"
      panelClassName="canvas canvasColorPickerMini__popover"
      button={button}
      anchorPosition={anchorPosition}
    >
      {() =>
        colors ? (
          <ColorPicker onChange={onChange} value={value} colors={colors} />
        ) : (
          <WorkpadColorPicker onChange={onChange} value={value} />
        )
      }
    </Popover>
  );
};

ColorPickerMiniUI.propTypes = {
  colors: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
  anchorPosition: PropTypes.string,
};

export const ColorPickerMini = injectI18n(ColorPickerMiniUI);
