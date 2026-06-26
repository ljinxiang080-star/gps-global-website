import type { ReactNode } from "react";
import type { SolutionVisual } from "@/lib/site-data";

type SolutionSceneProps = {
  visual?: SolutionVisual;
  className?: string;
};

const strokeProps = {
  stroke: "#0f3567",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: "2.6",
};

function SceneShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative isolate overflow-hidden rounded-md border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50",
        className,
      ].join(" ")}
    >
      <svg
        aria-hidden="true"
        className="h-full min-h-[128px] w-full"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 220 160"
      >
        <rect fill="#f8fbff" height="160" rx="14" width="220" />
        <circle cx="181" cy="30" fill="#79d7ff" opacity="0.28" r="22" />
        <circle cx="38" cy="126" fill="#0b68ff" opacity="0.1" r="24" />
        <path
          d="M24 120C67 91 111 141 196 95"
          fill="none"
          opacity="0.22"
          stroke="#0b68ff"
          strokeWidth="18"
        />
        <g style={{ filter: "drop-shadow(0 12px 14px rgba(11, 104, 255, 0.18))" }}>
          {children}
        </g>
      </svg>
    </div>
  );
}

function FleetScene() {
  return (
    <SceneShell>
      <path
        d="M32 110c44-26 88-29 156-10"
        fill="none"
        stroke="#0b68ff"
        strokeDasharray="7 8"
        strokeWidth="3"
      />
      <rect x="46" y="40" width="84" height="52" rx="9" fill="#061936" {...strokeProps} />
      <path d="M60 74l26-24 25 18 18-22" fill="none" stroke="#79d7ff" strokeWidth="4" />
      <circle cx="86" cy="50" fill="#0b68ff" r="5" />
      <circle cx="111" cy="68" fill="#79d7ff" r="5" />
      <path d="M138 95h39l13 14v15h-52V95Z" fill="#ffffff" {...strokeProps} />
      <path d="M177 96v28M148 110h24" fill="none" stroke="#0b68ff" strokeWidth="3" />
      <circle cx="151" cy="125" fill="#0b68ff" r="6" />
      <circle cx="184" cy="125" fill="#0b68ff" r="6" />
    </SceneShell>
  );
}

function AssetScene() {
  return (
    <SceneShell>
      <rect x="39" y="52" width="70" height="52" rx="7" fill="#ffffff" {...strokeProps} />
      <path d="M50 68h48M50 82h48M50 96h48" stroke="#0b68ff" strokeWidth="2.5" />
      <path d="M112 60l27-14 33 18v43l-31 17-29-18V60Z" fill="#b8d7ff" {...strokeProps} />
      <path d="M139 46v43l33-25M139 89l-27-29" fill="none" {...strokeProps} />
      <path d="M160 38c0-11 17-11 17 0 0 10-17 20-17 20s-17-10-17-20c0-11 17-11 17 0Z" fill="#ffffff" {...strokeProps} />
      <circle cx="160" cy="39" fill="#0b68ff" r="4" />
    </SceneShell>
  );
}

function MachineryScene() {
  return (
    <SceneShell>
      <path d="M28 120h168" fill="none" stroke="#0f3567" strokeWidth="3" />
      <path d="M45 90h61l30-40h31l-18 31h28l-18 27H48Z" fill="#b8d7ff" {...strokeProps} />
      <path d="M57 88l15-45h42l18 17-23 28H57Z" fill="#ffffff" {...strokeProps} />
      <path d="M78 52h26l10 10-14 17H69l9-27Z" fill="#eaf4ff" />
      <circle cx="69" cy="112" fill="#ffffff" r="15" {...strokeProps} />
      <circle cx="124" cy="112" fill="#ffffff" r="15" {...strokeProps} />
      <circle cx="69" cy="112" fill="#0b68ff" r="6" />
      <circle cx="124" cy="112" fill="#0b68ff" r="6" />
      <path d="M167 49l-12 31h25l-13-31Z" fill="#ffffff" {...strokeProps} />
      <path d="M36 54h22M32 68h20" fill="none" stroke="#79d7ff" strokeWidth="4" />
    </SceneShell>
  );
}

function FuelScene() {
  return (
    <SceneShell>
      <path d="M41 118h112" fill="none" stroke="#0f3567" strokeWidth="3" />
      <rect x="43" y="42" width="57" height="79" rx="11" fill="#ffffff" {...strokeProps} />
      <rect x="57" y="55" width="28" height="24" rx="4" fill="#eaf4ff" {...strokeProps} />
      <path d="M100 59l21 20v28c0 8 6 14 14 14s14-6 14-14V84" fill="none" {...strokeProps} />
      <circle cx="149" cy="67" fill="#ffffff" r="23" {...strokeProps} />
      <path d="M149 67l11-9M136 67h26" fill="none" stroke="#0b68ff" strokeWidth="3" />
      <path
        d="M73 85c8 9 12 16 12 23a12 12 0 0 1-24 0c0-7 4-14 12-23Z"
        fill="#b8d7ff"
        {...strokeProps}
      />
    </SceneShell>
  );
}

function LivestockScene() {
  return (
    <SceneShell>
      <path d="M28 113c34-35 71-29 100-8 28-26 49-25 68-5v35H28v-22Z" fill="#b8d7ff" opacity="0.7" />
      <path d="M36 104h148M48 92v34M83 92v34M118 92v34M153 92v34" fill="none" stroke="#0f3567" strokeWidth="2.3" />
      <path
        d="M84 86c-9-2-16-9-17-19l-3-19 15 11c9-8 28-7 39 2l16-12-4 20c-3 16-17 27-34 27h-3c-4 0-7 0-9-1Z"
        fill="#ffffff"
        {...strokeProps}
      />
      <path d="M83 60c5 8 5 20 0 31M118 61c-5 8-5 20 0 31" fill="none" {...strokeProps} />
      <circle cx="94" cy="74" fill="#0b68ff" r="4" />
      <circle cx="111" cy="74" fill="#0b68ff" r="4" />
      <path d="M146 39c0-12 18-12 18 0 0 10-18 21-18 21s-18-11-18-21c0-12 18-12 18 0Z" fill="#ffffff" {...strokeProps} />
      <circle cx="146" cy="40" fill="#0b68ff" r="4" />
    </SceneShell>
  );
}

function IntegrationScene() {
  return (
    <SceneShell>
      <rect x="39" y="39" width="82" height="63" rx="10" fill="#061936" {...strokeProps} />
      <path d="M54 61h25M54 78h52" fill="none" stroke="#79d7ff" strokeWidth="4" />
      <circle cx="96" cy="61" fill="#0b68ff" r="6" />
      <path d="M121 71h22M143 71h20" fill="none" stroke="#0b68ff" strokeDasharray="4 6" strokeWidth="3" />
      <path d="M154 48h34v46h-34z" fill="#ffffff" {...strokeProps} />
      <path d="M162 61h18M162 74h18M162 87h10" fill="none" stroke="#0b68ff" strokeWidth="2.5" />
      <path d="M73 120h72M89 102l-9 18M116 102l9 18" fill="none" {...strokeProps} />
      <circle cx="55" cy="118" fill="#ffffff" r="10" {...strokeProps} />
      <circle cx="164" cy="118" fill="#ffffff" r="10" {...strokeProps} />
      <path d="M65 118h89" fill="none" stroke="#79d7ff" strokeWidth="4" />
    </SceneShell>
  );
}

export function SolutionScene({
  visual = "fleet",
  className,
}: SolutionSceneProps) {
  const scenes: Record<SolutionVisual, ReactNode> = {
    fleet: <FleetScene />,
    asset: <AssetScene />,
    machinery: <MachineryScene />,
    fuel: <FuelScene />,
    livestock: <LivestockScene />,
    integration: <IntegrationScene />,
  };

  return (
    <div className={["[&>div]:h-full", className ?? ""].join(" ")}>
      {scenes[visual]}
    </div>
  );
}
