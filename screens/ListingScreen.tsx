import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

import {getIceHoles} from '../api/api';
import {styles} from '../styles';
import {IceHole} from 'models/iceHole';

const ListingScreen = () => {
  const [iceHoles, setIceHoles] = useState<IceHole[] | null>([]);
  const [loading, setLoading] = useState<boolean | null>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data: IceHole[] = await getIceHoles();
      setIceHoles(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.tabs}>
      {loading ? (
        <Text style={styles.bodyText}>Ladataan tietoja...</Text>
      ) : (
        <FlatList
          data={iceHoles}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => (
            <Text style={styles.bodyText}>Ei saunoja :(</Text>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default ListingScreen;
