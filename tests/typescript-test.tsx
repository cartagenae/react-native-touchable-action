
import React from 'react';

import FloatingActionButton, {
  FloatingActionButton as NamedFloatingActionButton,
  type FloatingActionButtonProps,
} from '../dist/index';

const Component: React.ComponentType<FloatingActionButtonProps> =
  FloatingActionButton;

const NamedComponent: React.ComponentType<FloatingActionButtonProps> =
  NamedFloatingActionButton;

void Component;
void NamedComponent;
