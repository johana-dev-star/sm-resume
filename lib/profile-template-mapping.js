// Profile to Template mapping
// Maps profile ID (filename without .json) to template ID and optional prompt file
export const profileTemplateMapping = {
    "lm1": {
        resume: "Luis Manriquez",
        template: "Resume-Creative-Burgundy",
        prompt: "luis-manriquez"
    },
    "gt1": {
        resume: "Georgeta Truca",
        template: "Resume-Bold-Emerald",
        prompt: "georgeta-truca"
    },
    "mb1": {
        resume: "Michelle Barbu",
        template: "Resume-Executive-Navy",
        prompt: "michelle-barbu"
    },
    "jv1": {
        resume: "Johana Velasquez",
        template: "Resume-Creative-Burgundy",
        prompt: "johana-velasquez"
    },
    "km1": {
        resume: "Kareem Maize",
        template: "Resume-Modern-Green",
        prompt: "kareem-maize-ai"
    },
    "vm1": {
        resume: "Vinay Matoori",
        template: "Resume-Corporate-Slate",
        prompt: "vinay-matorio"
    },
    "as1": {
        resume: "Anatoliy Sokolov",
        template: "Resume-Academic-Purple",
        prompt: "anatoliy-sokolov"
    },
    "sg1": {
        resume: "Shailendar Gurram",
        template: "Resume-Executive-Navy",
        prompt: "shailendar-gurram"
    },
    "af1": {
        resume: "Andrew Facchiano",
        template: "Resume-Creative-Burgundy",
        prompt: "andrew-facchiano"
    },
    "js1": {
        resume: "James Sengsavang",
        template: "Resume-Tech-Teal",
        prompt: "james-sengsavang"
    },
    "mb2": {
        resume: "Michelle Buenaflor",
        template: "Resume-Corporate-Slate",
        prompt: "michelle-buenaflor"
    },
    "bh1": {
        resume: "Benjamin Helgeson",
        template: "Resume-Bold-Emerald",
        prompt: "benjamin-helgeson"
    },
    "samrobertson": {
        resume: "Samuel Robertson",
        template: "Resume-Bold-Emerald",
        prompt: "samuel-robertson"
    },
    "cr1": {
        resume: "Christian Richardson",
        template: "Resume-Executive-Navy",
        prompt: "default"
    },
    "jm1": {
        resume: "Janiel Medeiros",
        template: "Resume-Executive-Navy",
        prompt: "janiel-medeiros"
    },
    "ak1": {
        resume: "Anna Karykowska",
        template: "Resume-Academic-Purple",
        prompt: "anna-karykowska"
    },
    "ml1": {
        resume: "Marlena L",
        template: "Resume-Bold-Emerald",
        prompt: "marlena-l"
    },
    "ml2": {
        resume: "Marlena Lawrynowicz",
        template: "Resume-Executive-Navy",
        prompt: "marlena-lawrynowicz"
    },
};


/**
 * Get profile configuration by slug (numeric ID)
 * @param {string} slug - The numeric ID slug (e.g., "1", "2", "3")
 * @returns {object|null} - Profile configuration or null if not found
 */
export const getProfileBySlug = (slug) => {
    if (!slug) return null;
    return profileTemplateMapping[slug] || null;
};

/**
 * Get resume name (profile name) by slug
 * @param {string} slug - The numeric ID slug (e.g., "1", "2", "3")
 * @returns {string|null} - Resume name or null if not found
 */
export const slugToProfileName = (slug) => {
    const config = getProfileBySlug(slug);
    return config?.resume || null;
};

/**
 * Get template for a profile by slug
 * @param {string} slug - The numeric ID slug (e.g., "1", "2", "3")
 * @returns {string} - Template ID or "Resume" as default
 */
export const getTemplateForProfile = (slug) => {
    const config = getProfileBySlug(slug);
    return config?.template || "Resume";
};

/**
 * Get prompt file name for a profile by slug
 * @param {string} slug - The numeric ID slug (e.g., "1", "2", "3")
 * @returns {string} - Prompt file name or "default"
 */
export const getPromptForProfile = (slug) => {
    const config = getProfileBySlug(slug);
    return config?.prompt || "default";
};

/**
 * Get all available slug values (numeric IDs from mapping)
 * @returns {string[]} - Array of available slugs (numeric IDs)
 */
export const getAvailableSlugs = () => {
    return Object.keys(profileTemplateMapping);
};

/**
 * Get profile configuration by profile ID (numeric key)
 * @param {string} profileId - The numeric profile ID
 * @returns {object|null} - Profile configuration or null if not found
 */
export const getProfileById = (profileId) => {
    return profileTemplateMapping[profileId] || null;
};

export default profileTemplateMapping;

