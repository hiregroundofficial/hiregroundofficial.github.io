/* ============================================================
   THE HIRE GROUND, site configuration
   ------------------------------------------------------------
   Any stat left as null renders as "Coming soon".
   ============================================================ */

const SITE_STATS = {
  socialFollowers: 1664,
  peopleReached: "60,000",
  studentsImpacted: 200,
  eventsHosted: 2,
};

const STAT_DEFS = [
  { key: "socialFollowers",  label: "Total social media followers (1,547 Instagram + 117 YouTube)" },
  { key: "peopleReached",    label: "People have seen our content" },
  { key: "studentsImpacted", label: "Students impacted by The Hire Ground" },
  { key: "eventsHosted",     label: "Events hosted" },
];

function fmtNum(n) {
  return typeof n === "number" ? n.toLocaleString("en-CA") : n;
}
