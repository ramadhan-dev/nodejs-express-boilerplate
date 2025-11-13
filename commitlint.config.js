export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    "type-case": [2, "always", "lower-case"],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+):\s(.*)$/,
      headerCorrespondence: ["type", "subject"],
    },
  },
};
