import { sOpenObject } from "@hediet/semantic-json";
import * as React from "react";
import {
	createReactVisualization,
	createVisualizer,
	globalVisualizationFactory,
} from "@hediet/visualization-core";
import { visualizationNs } from "../../consts";
import { MonacoEditorLazyLoadable } from "../monaco-text-visualizer";

export const sourceVisualizer = createVisualizer({
	id: "source",
	name: "JSON Source",
	serializer: sOpenObject({
		kind: sOpenObject({}),
	}).defineAs(visualizationNs("SourceVisualizationData")),
	getVisualization: (data, self) =>
		createReactVisualization(self, { priority: -100 }, ({ theme }) => (
			<MonacoEditorLazyLoadable
				text={JSON.stringify(data, undefined, 4)}
				fileName={"main.json"}
				theme={theme}
			/>
		)),
});

globalVisualizationFactory.addHiddenVisualizer(sourceVisualizer);
