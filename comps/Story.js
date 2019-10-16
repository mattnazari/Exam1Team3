import React, { useState } from "react";
import { View, Text, ScrollView, Switch } from "react-native";
import styles from "../styles/StoryStyles";

const Story = () => {
  const [switchState, setSwitchState] = useState(false);

  const [switchMode, setSwitchMode] = useState(false);

  var BGColor = "#b4dddd";
  var txtColor = "#000000";

  if (switchMode === true) {
    BGColor = "#000000";
    txtColor = "#FFFFFF";
  }

  txtBox = (
    <View>
      <Text style={[styles.txt, { color: txtColor }]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nisl vel pretium
        lectus quam id leo. Risus pretium quam vulputate dignissim suspendisse
        in. Interdum velit laoreet id donec ultrices tincidunt arcu non. Semper
        eget duis at tellus at urna. Et molestie ac feugiat sed. In aliquam sem
        fringilla ut morbi tincidunt. Ultricies mi quis hendrerit dolor magna
        eget. Netus et malesuada fames ac. Odio eu feugiat pretium nibh ipsum
        consequat nisl vel. Quis commodo odio aenean sed adipiscing diam donec
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nisl vel pretium
        lectus quam id leo. Risus pretium quam vulputate dignissim suspendisse
        in. Interdum velit laoreet id donec ultrices tincidunt arcu non. Semper
        eget duis at tellus at urna. Et molestie ac feugiat sed. In aliquam sem
        fringilla ut morbi tincidunt. Ultricies mi quis hendrerit dolor magna
        eget. Netus et malesuada fames ac. Odio eu feugiat pretium nibh ipsum
        consequat nisl vel. Quis commodo odio aenean sed adipiscing diam donec
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nisl vel pretium
        lectus quam id leo. Risus pretium quam vulputate dignissim suspendisse
        in. Interdum velit laoreet id donec ultrices tincidunt arcu non. Semper
        eget duis at tellus at urna. Et molestie ac feugiat sed. In aliquam sem
        fringilla ut morbi tincidunt. Ultricies mi quis hendrerit dolor magna
        eget. Netus et malesuada fames ac. Odio eu feugiat pretium nibh ipsum
        consequat nisl vel. Quis commodo odio aenean sed adipiscing diam donec
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nisl vel pretium
        lectus quam id leo. Risus pretium quam vulputate dignissim suspendisse
        in. Interdum velit laoreet id donec ultrices tincidunt arcu non. Semper
        eget duis at tellus at urna. Et molestie ac feugiat sed. In aliquam sem
        fringilla ut morbi tincidunt. Ultricies mi quis hendrerit dolor magna
        eget. Netus et malesuada fames ac. Odio eu feugiat pretium nibh ipsum
        consequat nisl vel. Quis commodo odio aenean sed adipiscing diam donec
      </Text>
    </View>
  );

  if (switchState === true) {
    txtBox = (
      <ScrollView>
        <Text style={[styles.txt, { color: txtColor }]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel
          pretium lectus quam id leo. Risus pretium quam vulputate dignissim
          suspendisse in. Interdum velit laoreet id donec ultrices tincidunt
          arcu non. Semper eget duis at tellus at urna. Et molestie ac feugiat
          sed. In aliquam sem fringilla ut morbi tincidunt. Ultricies mi quis
          hendrerit dolor magna eget. Netus et malesuada fames ac. Odio eu
          feugiat pretium nibh ipsum consequat nisl vel. Quis commodo odio
          aenean sed adipiscing diam donec Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Nisl vel pretium lectus quam id leo.
          Risus pretium quam vulputate dignissim suspendisse in. Interdum velit
          laoreet id donec ultrices tincidunt arcu non. Semper eget duis at
          tellus at urna. Et molestie ac feugiat sed. In aliquam sem fringilla
          ut morbi tincidunt. Ultricies mi quis hendrerit dolor magna eget.
          Netus et malesuada fames ac. Odio eu feugiat pretium nibh ipsum
          consequat nisl vel. Quis commodo odio aenean sed adipiscing diam donec
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel
          pretium lectus quam id leo. Risus pretium quam vulputate dignissim
          suspendisse in. Interdum velit laoreet id donec ultrices tincidunt
          arcu non. Semper eget duis at tellus at urna. Et molestie ac feugiat
          sed. In aliquam sem fringilla ut morbi tincidunt. Ultricies mi quis
          hendrerit dolor magna eget. Netus et malesuada fames ac. Odio eu
          feugiat pretium nibh ipsum consequat nisl vel. Quis commodo odio
          aenean sed adipiscing diam donec Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Nisl vel pretium lectus quam id leo.
          Risus pretium quam vulputate dignissim suspendisse in. Interdum velit
          laoreet id donec ultrices tincidunt arcu non. Semper eget duis at
          tellus at urna. Et molestie ac feugiat sed. In aliquam sem fringilla
          ut morbi tincidunt. Ultricies mi quis hendrerit dolor magna eget.
          Netus et malesuada fames ac. Odio eu feugiat pretium nibh ipsum
          consequat nisl vel. Quis commodo odio aenean sed adipiscing diam donec
        </Text>
      </ScrollView>
    );
  }

  return (
    <View style={[styles.bg, { backgroundColor: BGColor }]}>
      <View style={styles.switchCont}>
        <Text style={{ color: txtColor }}>Scroll</Text>

        <Switch
          style={styles.switch}
          value={switchState}
          onValueChange={() => {
            setSwitchState(!switchState);
          }}
        />

        <Text style={{ color: txtColor }}>Night Mode</Text>

        <Switch
          style={styles.switch}
          value={switchMode}
          onValueChange={() => {
            setSwitchMode(!switchMode);
          }}
        />
      </View>

      {txtBox}
    </View>
  );
};

export default Story;