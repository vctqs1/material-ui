import React from 'react';
import { DefaultComponentProps, OverrideProps, Simplify } from '@mui/types';
import { OptionState } from '../ListboxUnstyled';
import { UseSelectOptionSlotProps } from '../SelectUnstyled/useSelect.types';
import { SlotComponentProps } from '../utils';

export interface OptionUnstyledComponentsPropsOverrides {}

export interface OptionUnstyledOwnProps<TValue> {
  /**
   * The value of the option.
   */
  value: TValue;
  children?: React.ReactNode;
  /**
   * If `true`, the option will be disabled.
   * @default false
   */
  disabled?: boolean;
  className?: string;
  /**
   * The props used for each slot inside the OptionUnstyled.
   * @default {}
   */
  slotProps?: {
    root?: SlotComponentProps<
      'li',
      OptionUnstyledComponentsPropsOverrides,
      OptionUnstyledOwnerState<TValue>
    >;
  };
  /**
   * The components used for each slot inside the OptionUnstyled.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots?: {
    root?: React.ElementType;
  };
  /**
   * A text representation of the option's content.
   * Used for keyboard text navigation matching.
   */
  label?: string;
}

export interface OptionUnstyledTypeMap<TValue, P = {}, D extends React.ElementType = 'li'> {
  props: P & OptionUnstyledOwnProps<TValue>;
  defaultComponent: D;
}

export type OptionUnstyledProps<
  TValue,
  D extends React.ElementType = OptionUnstyledTypeMap<TValue>['defaultComponent'],
> = OverrideProps<OptionUnstyledTypeMap<TValue, {}, D>, D> & {
  component?: D;
};

export interface OptionUnstyledType {
  <TValue, C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    } & OverrideProps<OptionUnstyledTypeMap<TValue>, C>,
  ): JSX.Element | null;
  <TValue>(props: DefaultComponentProps<OptionUnstyledTypeMap<TValue>>): JSX.Element | null;
  propTypes?: any;
}

export type OptionUnstyledOwnerState<TValue> = Simplify<
  OptionUnstyledOwnProps<TValue> & OptionState
>;

export type OptionUnstyledRootSlotProps<TValue> = Simplify<
  UseSelectOptionSlotProps & {
    children?: React.ReactNode;
    className: string;
    ref: React.Ref<HTMLLIElement>;
    ownerState: OptionUnstyledOwnerState<TValue>;
  }
>;
