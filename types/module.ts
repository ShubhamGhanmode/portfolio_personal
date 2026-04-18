// Module system type definitions

import { ComponentType } from 'react';

/**
 * Props passed to every module component
 */
export interface ModuleProps {
  /** Module ID for styling hooks and section anchors */
  id: string;
  /** Optional className for additional styling */
  className?: string;
}

/**
 * Module definition in the registry
 */
export interface ModuleDefinition {
  /** Unique identifier matching folder name and content file */
  id: string;
  /** Display name for navigation */
  name: string;
  /** Whether to show this module in navigation */
  showInNav: boolean;
  /** Whether the module is enabled (defaults to true if omitted) */
  enabled?: boolean;
  /** The module component to render */
  component: ComponentType<ModuleProps>;
  /** Optional icon component for navigation */
  icon?: ComponentType<{ className?: string }>;
}

/**
 * Base interface for all module content
 * Modules extend this with their specific fields
 */
export interface ModuleContentBase {
  /** Optional heading override */
  heading?: string;
  /** Optional subheading */
  subheading?: string;
}
