import React, { useRef } from "react";
import { ScrollView } from "react-native";
import { View, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
        /* WHEN WE ADD AN IMAGE WE WANT THE SCREEN TO SCROLL TO THE END 
          
      NOTE: SCROLLING TO THE END IN VERTICAL WAY IS FROM THE BOTTOM THAT MEANS IT WILL 
      START FROM THE BOTTOM 
      
      SCROLLING TO THE END IN HORIZONTAL WAY IS FROM THE RIGHT THAT MEANS IT WILL 
      START FROM THE RIGHT*/

        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {/* IF THERE IS A IMAGE IN THE IMAGE URIS LIST */}
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeEvent={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          {/* IF THE URIS LIST IS EMTY OR THERE IS NO IMAGE SHOWN IN THE SCREEN */}
          <ImageInput onChangeEvent={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
