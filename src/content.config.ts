import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema({
    extend: z.object({
      project: z.enum(["nowake-ai", "betternat", "kube-insight", "svc-lb-mux"]),
      category: z.enum([
        "overview",
        "concept",
        "guide",
        "reference",
        "operations",
        "provider",
        "troubleshooting",
        "architecture",
        "security",
        "roadmap",
      ]),
      audience: z.string(),
      status: z.enum(["stable", "preview", "draft", "roadmap"]),
      source_repo: z.string(),
      source_path: z.string(),
      last_verified: z
        .union([z.string(), z.date()])
        .transform((value) =>
          value instanceof Date ? value.toISOString().slice(0, 10) : value,
        )
        .optional(),
      applies_to: z.array(z.string()).optional(),
      agent_friendly: z.boolean().optional(),
    }),
  }),
});

export const collections = { docs };
