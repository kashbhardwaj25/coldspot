"use client";

import dynamic from "next/dynamic";
import { itemKey } from "@/lib/types";
import { MapHeader } from "./MapHeader";
import { MapStage } from "./MapStage";
import { ZoomControls } from "./parts";
import type { MapData } from "./state";
import { TunerCard } from "./TunerCard";
import { useMapState } from "./useMapState";

// Sheets (Base UI Drawer, forms) load after the page, off the critical path: nobody needs one before the globe.
const Sheet = dynamic(() => import("./sheets/Sheet").then((m) => m.Sheet), { ssr: false });

type Props = { data: MapData };

/** The map screen: renders what useMapState knows, and hands its actions to the header, card and sheets. */
export default function UncannyMapApp({ data }: Props) {
  const map = useMapState(data);
  const { actions, tuned } = map;
  // Refs stay standalone variables, as the React Compiler rules require.
  const { baseRef, dotsRef, spaceRef, ringRef, hintRef, zoomRef, topRef } = map.globe;

  return (
    <div className="um-map" data-mode={map.mode} data-world={map.world}>
      <MapStage
        {...{ baseRef, dotsRef, spaceRef, ringRef, hintRef }}
        hintHidden={map.hintHidden}
        tuned={tuned !== null}
      />

      <MapHeader
        ref={topRef}
        mode={map.mode}
        world={map.world}
        items={map.items}
        active={map.active}
        soundOn={map.sound.on}
        onMode={actions.changeMode}
        onToggleCategory={actions.toggleCategory}
        onShare={actions.openShare}
        onSound={map.sound.toggle}
        onRandom={actions.random}
        onList={actions.openList}
        onWorld={actions.toggleWorld}
      />

      <ZoomControls ref={zoomRef} onZoom={actions.zoom} />

      <div className="tuner">
        <TunerCard
          item={tuned}
          nearest={map.nearest}
          coords={map.coords}
          echoes={tuned?.kind === "story" ? map.echoState[tuned.slug]?.echoes : undefined}
          read={tuned ? map.read.has(itemKey(tuned)) : false}
          onThisDay={map.onThisDay}
          onOpen={actions.openItem}
        />
      </div>

      <Sheet
        sheet={map.sheet}
        mode={map.mode}
        data={data}
        placeFilter={map.placeFilter}
        echoState={map.echoState}
        setEchoState={map.setEchoState}
        onClose={actions.closeSheet}
        onPick={actions.pickFromList}
        onOpenNext={actions.openNext}
        onPickPlace={actions.goToPlace}
        onClearPlace={actions.clearPlace}
        onNearbyStories={actions.nearbyStories}
      />
    </div>
  );
}
