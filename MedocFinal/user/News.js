import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import { NativeBaseProvider, FlatList, Divider, Image, Spinner } from 'native-base';
import { services } from '../app/Services';

export default function All() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
      services('health')
          .then(data => {
              setNewsData(data)
          })
          .catch(error => {
              alert(error)
          })
  }, [])

    return (
        <NativeBaseProvider>
            {newsData.length > 1 ? (
                <FlatList
                    data={newsData}
                    renderItem={({ item}) => (
                    <View>
                        <View style={styles.newsContainer}>
                            <Image
                                width={550}
                                height={250}
                                resizeMode={"cover"}
                                source={{
                                uri: item.urlToImage,
                                }}
                                alt="Network Busy"
                            />
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                            <Text style={styles.date}>
                                {moment(item.publishedAt).format('LLL')}
                            </Text>
                            <Text style={styles.newsDescription}>
                                {item.description}
                            </Text>
                        </View>
                        <Divider my={2} bg="#e0e0e0" />
                    </View>
                    )}
                    keyExtractor={(item,index) => index.toString()}
                    // keyExtractor={(item) => item.id}
                />
                ) : (
                  <View style={styles.spinner}>
                      <Spinner color="danger.400" />
                  </View>
                )}
        </NativeBaseProvider>

    )
}

const styles = StyleSheet.create({
    newsContainer: {
        padding: 10
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: "bold"
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10
    },
    date: {
        fontSize: 14
    },
    spinner: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 400
},
});