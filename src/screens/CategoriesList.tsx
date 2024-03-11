import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {CategoriesListItem} from '../components/categories/CategoriesListItem';

export const CategoriesList = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({item}) => (
        <CategoriesListItem
          title={item.title}
          id={item.id}
          color={item.color}
        />
      )}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};
