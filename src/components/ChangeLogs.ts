import V_1_21_1 from "../assets/changelogs/1_21_1.json";
import V_1_21_3 from "../assets/changelogs/1_21_3.json";
import V_1_21_4 from "../assets/changelogs/1_21_4.json";
import V_1_21_5 from "../assets/changelogs/1_21_5.json";

const versionConversion: Map<string, any> = new Map(
  Object.entries({
    "1.21.1": V_1_21_1,
    "1.21.3": V_1_21_3,
    "1.21.4": V_1_21_4,
    "1.21.5": V_1_21_5,
  })
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
  obsolete?: string[];
  renamed?: string[];
  noInternal?: string[];
  libraries?: string[];
}

function flattenValues(
  change: ChangeLogs,
  inter: (ver: VersionTemplate) => Array<string> | null
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
    slug: build.id.toString(),
    text: build.name,
  };
}

export class ChangeLogs {
  version: string;
  data: VersionTemplate[];

  flatAdditions: string[];
  flatDeprecations: string[];
  flatExtensions: string[];
  flatRemoved: string[];
  flatObsolete: string[];
  flatRenamed: string[];
  flatNoInternal: string[];
  flatLibraries: string[];

  headings: SidebarsProps[];
  staticPaths: string[];

  constructor(version: string) {
    this.version = version;

    let temp: any | undefined = versionConversion.get(version);
    if (temp == undefined) {
      throw "No valid version was given!";
    }

    this.data = temp as Array<VersionTemplate>;

    this.flatAdditions = flattenValues(this, (ver) =>
      ver.additions == undefined ? null : ver.additions
    );
    this.flatDeprecations = flattenValues(this, (ver) =>
      ver.deprecations == undefined ? null : ver.deprecations
    );
    this.flatExtensions = flattenValues(this, (ver) =>
      ver.extensions == undefined ? null : ver.extensions
    );
    this.flatRemoved = flattenValues(this, (ver) =>
      ver.removed == undefined ? null : ver.removed
    );
    this.flatObsolete = flattenValues(this, (ver) =>
      ver.obsolete == undefined ? null : ver.obsolete
    );
    this.flatRenamed = flattenValues(this, (ver) =>
      ver.renamed == undefined ? null : ver.renamed
    );
    this.flatNoInternal = flattenValues(this, (ver) =>
      ver.noInternal == undefined ? null : ver.noInternal
    );
    this.flatLibraries = flattenValues(this, (ver) =>
      ver.libraries == undefined ? null : ver.libraries
    );

    this.headings = this.data.map((e) => createHeadingObj(e));
    this.staticPaths = this.headings.map((e) => e.slug);

    cachedChangeLogs.set(version, this);
  }
}
