// install (please try to align the version of installed @nivo packages)

import { ResponsiveLine } from "@nivo/line"

// yarn add @nivo/line
const data = [
    {
      "id": "japan",
      "color": "hsl(314, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 251
        },
        {
          "x": "helicopter",
          "y": 156
        },
        {
          "x": "boat",
          "y": 174
        },
        {
          "x": "train",
          "y": 2
        },
        {
          "x": "subway",
          "y": 48
        },
        {
          "x": "bus",
          "y": 113
        },
        {
          "x": "car",
          "y": 233
        },
        {
          "x": "moto",
          "y": 137
        },
        {
          "x": "bicycle",
          "y": 248
        },
        {
          "x": "horse",
          "y": 172
        },
        {
          "x": "skateboard",
          "y": 195
        },
        {
          "x": "others",
          "y": 259
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(218, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 290
        },
        {
          "x": "helicopter",
          "y": 212
        },
        {
          "x": "boat",
          "y": 292
        },
        {
          "x": "train",
          "y": 167
        },
        {
          "x": "subway",
          "y": 171
        },
        {
          "x": "bus",
          "y": 91
        },
        {
          "x": "car",
          "y": 30
        },
        {
          "x": "moto",
          "y": 61
        },
        {
          "x": "bicycle",
          "y": 156
        },
        {
          "x": "horse",
          "y": 1
        },
        {
          "x": "skateboard",
          "y": 45
        },
        {
          "x": "others",
          "y": 174
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(21, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 18
        },
        {
          "x": "helicopter",
          "y": 5
        },
        {
          "x": "boat",
          "y": 235
        },
        {
          "x": "train",
          "y": 19
        },
        {
          "x": "subway",
          "y": 18
        },
        {
          "x": "bus",
          "y": 64
        },
        {
          "x": "car",
          "y": 94
        },
        {
          "x": "moto",
          "y": 282
        },
        {
          "x": "bicycle",
          "y": 29
        },
        {
          "x": "horse",
          "y": 67
        },
        {
          "x": "skateboard",
          "y": 184
        },
        {
          "x": "others",
          "y": 1
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(331, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 97
        },
        {
          "x": "helicopter",
          "y": 78
        },
        {
          "x": "boat",
          "y": 213
        },
        {
          "x": "train",
          "y": 29
        },
        {
          "x": "subway",
          "y": 262
        },
        {
          "x": "bus",
          "y": 97
        },
        {
          "x": "car",
          "y": 210
        },
        {
          "x": "moto",
          "y": 298
        },
        {
          "x": "bicycle",
          "y": 259
        },
        {
          "x": "horse",
          "y": 216
        },
        {
          "x": "skateboard",
          "y": 151
        },
        {
          "x": "others",
          "y": 84
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(131, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 127
        },
        {
          "x": "helicopter",
          "y": 223
        },
        {
          "x": "boat",
          "y": 227
        },
        {
          "x": "train",
          "y": 157
        },
        {
          "x": "subway",
          "y": 80
        },
        {
          "x": "bus",
          "y": 208
        },
        {
          "x": "car",
          "y": 77
        },
        {
          "x": "moto",
          "y": 62
        },
        {
          "x": "bicycle",
          "y": 206
        },
        {
          "x": "horse",
          "y": 41
        },
        {
          "x": "skateboard",
          "y": 129
        },
        {
          "x": "others",
          "y": 55
        }
      ]
    }
  ]


const Mycharts = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default Mycharts