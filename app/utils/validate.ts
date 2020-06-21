/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {contains} from 'ramda';
const ValidateJS = require('validate.js');

// HACK(steve): wierd typescript situation because of strange typings
const Validate: any = ValidateJS.default ? ValidateJS.default : ValidateJS;

Validate.validators.excludes = function custom(value, options, key, attributes) {
  const list = attributes[options.attribute] || [];
  if (value && contains(value, list)) {
    return options.message || `${value} is in the list`;
  }
};

Validate.validators.tripped = function custom(value, options, key, attributes) {
  if (value && attributes[options.attribute] === true) {
    return options.message || `${options.attribute} is true`;
  }
};

/**
 * Defines the rules for validating.
 *
 * Example:
 * ```ts
 * const RULES = {
 *   favoriteBand: {
 *     inclusion: { ['Weezer', 'Other'], message: 'Pick wisely.' }
 *   },
 *   name: {
 *     presence: { message: 'A developer has no name?' }
 *   }
 * }
 * validate(RULES, {})
 * ```
 *
 * See https://validatejs.org/#validators for more examples.
 *
 */
export interface ValidationRules {
  [key: string]: {}
}

/**
 * An object containing any errors found.
 *
 * Example:
 * ```js
 * {
 *   email: ['Invalid email address.'],
 *   password: [
 *     'Password must be 6 characters.',
 *     'Password must have at least 1 digit.'
 *   ]
 * }
 * ```
 */
export interface ValidationErrors {
  [key: string]: {}
}

export function validate(rules: ValidationRules, data: {}): ValidationErrors {
  if (typeof data !== 'object') {
    return {} as ValidationErrors;
  }
  // eslint-disable-next-line new-cap
  return Validate(data, rules, {fullMessages: false}) || {};
}
