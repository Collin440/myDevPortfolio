export type Project = {
  id: string;
  title: string;
  tag: string;
  blurb: string;
  stack: string[];
  status: string;
};

export const projects: Project[] = [
  {
    id: "greenhaus",
    title: "The GreenHaus Arc",
    tag: "Full-stack",
    blurb:
      "A venue-first social app: discover places, follow people and chat in real time, with an AI Radar search powered by Gemini.",
    stack: ["React", "Supabase", "Gemini", "Google Maps"],
    status: "~70% complete",
  },
  {
    id: "tsebo",
    title: "Tsebo Arc",
    tag: "Native mobile",
    blurb:
      "A native Kotlin Android app: a research-focused community for tech and science people.",
    stack: ["Kotlin", "Android"],
    status: "In progress",
  },
  {
    id: "cloud-realm",
    title: "The Cloud Realm",
    tag: "Cloud",
    blurb: "This portfolio, hosted on AWS with S3 and CloudFront.",
    stack: ["React", "TypeScript", "AWS S3", "CloudFront"],
    status: "Live",
  },
];
