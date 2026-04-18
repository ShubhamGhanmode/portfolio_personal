// Module registry utilities

import { ModuleDefinition } from '@/types/module';

/**
 * Filter modules to only enabled ones
 */
export function getActiveModules(modules: ModuleDefinition[]): ModuleDefinition[] {
    return modules.filter((module) => module.enabled !== false);
}

/**
 * Get modules that should appear in navigation
 */
export function getNavModules(modules: ModuleDefinition[]): ModuleDefinition[] {
    return getActiveModules(modules).filter((module) => module.showInNav);
}

/**
 * Find a module by ID
 */
export function getModuleById(
    modules: ModuleDefinition[],
    id: string
): ModuleDefinition | undefined {
    return modules.find((module) => module.id === id);
}
