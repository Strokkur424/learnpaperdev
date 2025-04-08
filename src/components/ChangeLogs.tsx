import V_1_21_1 from "../assets/changelogs/1_21_1.json";
import V_1_21_3 from "../assets/changelogs/1_21_3.json";

const versionConversion: Map<string, any> = new Map(
  Object.entries({
    "1.21.1": V_1_21_1,
    "1.21.3": V_1_21_3,
  }),
);

export interface SidebarsProps {
  depth: number;
  slug: string;
  text: string;
}

const cachedChangeLogs: Map<string, ChangeLogs> = new Map();
export function getChangeLogs(version: string): ChangeLogs {
  let out: ChangeLogs | undefined = cachedChangeLogs.get(version);
  if (out != undefined) {
    return out;
  }

  return new ChangeLogs(version);
}

export interface VersionTemplate {
  name: string;
  link: string;
  id: number;

  extra?: string;
  additions?: string[];
  deprecations?: string[];
  extensions?: string[];
  removed?: string[];
  renamed?: string[];
  noInternal?: string[];
}

function flattenValues(
  change: ChangeLogs,
  inter: (ver: VersionTemplate) => Array<string> | null,
): Array<string> {
  let out: Array<string> = new Array<string>();
  change.data
    .map((ver) => inter(ver))
    .filter((val) => val != null)
    .forEach((val) => val.forEach((sub) => out.push(sub)));
  return out;
}

function createHeadingObj(build: VersionTemplate): SidebarsProps {
  return {
    depth: 2,
    slug: (build.id + " " + build.name).toLowerCase().replaceAll(" ", "-"),
    text: build.name,
  };
}

export class ChangeLogs {
  version: string;
  data: Array<VersionTemplate>;

  flatAdditions: Array<string>;
  flatDeprecations: Array<string>;
  flatExtensions: Array<string>;
  flatRemoved: Array<string>;
  flatRenamed: Array<string>;
  flatNoInternal: Array<string>;

  headings: Array<SidebarsProps>;
  staticPaths: Array<string>;

  constructor(version: string) {
    this.version = version;

    let temp: any | undefined = versionConversion.get(version);
    if (temp == undefined) {
      throw "No valid version was given!";
    }

    this.data = temp as Array<VersionTemplate>;

    this.flatAdditions = flattenValues(this, (ver) =>
      ver.additions == undefined ? null : ver.additions,
    );
    this.flatDeprecations = flattenValues(this, (ver) =>
      ver.deprecations == undefined ? null : ver.deprecations,
    );
    this.flatExtensions = flattenValues(this, (ver) =>
      ver.extensions == undefined ? null : ver.extensions,
    );
    this.flatRemoved = flattenValues(this, (ver) =>
      ver.removed == undefined ? null : ver.removed,
    );
    this.flatRenamed = flattenValues(this, (ver) =>
      ver.renamed == undefined ? null : ver.renamed,
    );
    this.flatNoInternal = flattenValues(this, (ver) =>
      ver.noInternal == undefined ? null : ver.noInternal,
    );

    this.headings = this.data.map((e) => createHeadingObj(e));
    this.staticPaths = this.headings.map((e) => e.slug);

    cachedChangeLogs.set(version, this);
  }
}
