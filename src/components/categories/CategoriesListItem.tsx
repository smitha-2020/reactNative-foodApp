import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type CategoriesListItemProps = {
  title: string;
  id: number;
  color: string;
};

export const CategoriesListItem = (listitem: CategoriesListItemProps) => {
  return (
    <View style={styles.mainView}>
      <Pressable
        onPress={() => {
          console.log(listitem.title);
        }}>
        <Text style={{textAlign: 'center'}}>{listitem.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    margin: 16,
    backgroundColor: 'coral',
    padding: 10,
    borderRadius: 10,

    elevation: 4,
    shadowColor: 'gray',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.5,
  },
});
