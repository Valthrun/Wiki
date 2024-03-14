import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

import ImageShowcaseMapped from "@site/docs/_media/showcase_01.png";
import ImageShowcaseOverlayInfo from "@site/docs/_media/showcase_02.png";
import ImageShowcaseOverlayHotkeys from "@site/docs/_media/showcase_overlay_hotkeys.png"
import ImageShowcaseOverlayVisuals from "@site/docs/_media/showcase_overlay_visuals.png";
import ImageShowcaseOverlayEspFeatures from "@site/docs/_media/showcase_overlay_esp_features.png";
import ImageShowcaseOverlayEspColors from "@site/docs/_media/showcase_overlay_esp_colors.png";
import ImageShowcaseOverlayAimAssist from "@site/docs/_media/showcase_overlay_aim_assist.png";
import ImageShowcaseOverlayWebRadar from "@site/docs/_media/showcase_overlay_web_radar.png";
import ImageShowcaseOverlayWebRadarShared from "@site/docs/_media/showcase_overlay_web_radar_shared.png";
import ImageShowcaseOverlayMisc from "@site/docs/_media/showcase_overlay_misc.png";

const kShowcaseImages: ReactImageGalleryItem[] = [
    ImageShowcaseMapped,
    ImageShowcaseOverlayInfo,
    ImageShowcaseOverlayHotkeys,
    ImageShowcaseOverlayVisuals,
    ImageShowcaseOverlayEspFeatures,
    ImageShowcaseOverlayEspColors,
    ImageShowcaseOverlayAimAssist,
    ImageShowcaseOverlayWebRadar,
    ImageShowcaseOverlayWebRadarShared,
    ImageShowcaseOverlayMisc
].map(url => ({ original: url }));

export default React.memo(() => {
    return (
        <ImageGallery
            items={kShowcaseImages}
            autoPlay={true}
            infinite={true}
            showNav={false}
            showBullets={true}
            startIndex={2}
        />
    )
});