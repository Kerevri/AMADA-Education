/**
 * Content loader helper.
 * Loads peer-reviewed JSON content files from src/content/{lang}/*.json
 * Falls back to 'az' if lang-specific file not found.
 */

import azEducation from "@/content/az/education.json";
import azLearning from "@/content/az/learning.json";
import azTopics from "@/content/az/topics.json";
import azTargetGroups from "@/content/az/target-groups.json";
import azResources from "@/content/az/resources.json";

export type ContentLang = "az" | "en";

const contentMap = {
  az: {
    education: azEducation,
    learning: azLearning,
    topics: azTopics,
    targetGroups: azTargetGroups,
    resources: azResources,
  },
  // en and ru can be added here when translations are ready
};

export function getContent(lang: ContentLang, section: keyof typeof contentMap["az"]) {
  const map = contentMap[lang as keyof typeof contentMap] ?? contentMap["az"];
  return map[section];
}

export function getEducationContent(lang: ContentLang) {
  return getContent(lang, "education") as typeof azEducation;
}

export function getHomepageContent(lang: ContentLang) {
  return (getContent(lang, "education") as typeof azEducation).homepage;
}

export function getLearningContent(lang: ContentLang) {
  return getContent(lang, "learning") as typeof azLearning;
}

export function getTopicsContent(lang: ContentLang) {
  return getContent(lang, "topics") as typeof azTopics;
}

export function getTargetGroupsContent(lang: ContentLang) {
  return getContent(lang, "targetGroups") as typeof azTargetGroups;
}

export function getResourcesContent(lang: ContentLang) {
  return getContent(lang, "resources") as typeof azResources;
}
