import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo,  AntDesign, FontAwesome5, MaterialCommunityIcons,} from "@expo/vector-icons";
import LikeImage from '../../assets/images/like.png';

const post = {
  id: "p1",
  createdAt: "19 m",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
    name: "Vadim Savin",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 11,
  numberOfShares: 2,
};

const FeedPost = () => {
  return (
      
      <View style={styles.post}>

        
        <View style={styles.header}>
          <Image source={{ uri: post.User.image }} 
          style={styles.profileImage}
          />
        </View>

        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
         <Entypo
            name="dots-three-horizontal"
            size={18}
            color="gray"
            style={styles.icon}
          />

    {post.description && <Text style={styles.description}>{post.description}</Text>
    }
    {post.image && (<Image source={{ uri: post.image }} style={styles.image}
    resizeMode="cover"
    /> 
    )}

        <View style={styles.footer}>
            <View styles={styles.statsRow}>
              <Image source={LikeImage} style={styles.likeIcon} />
              <Text style={styles.likedBy}>
                Tony Stark and {post.numbersOfLikes}others.
                </Text>
                <Text style={styles.numberOfShares}>
                  {post.numberOfShares} shares
                </Text>
            </View>

            <View style={styles.buttonsRow}>
                <View style={styles.iconButton}>
                  <AntDesign name="like2" size={18}  color="grey" />
                  <Text style={styles.iconButtonText}>Like</Text>
                </View>
           

                <View style={styles.iconButton}>
                  <FontAwesome5 name="comment-alt" size={18}  color="grey" />
                  <Text style={styles.iconButtonText}>comment</Text>
                </View>

                <View style={styles.iconButton}>
                  <MaterialCommunityIcons name="share-outline" size={18}  color="grey" />
                  <Text style={styles.iconButtonText}>Share</Text>
                </View>
            </View>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  post: {
    width: "100%",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "grey",
  },
  icon: {
    marginLeft: "auto",
  },
    description: {
    lineHeight: 20,
    paddingHorizontal: 10,
    letterSpacing: 0.3,
  },
  image: {
    width: "100%",
    aspectRatio: 4/3,
    marginTop: 10,
  },

  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: "grey",
  },
  shares: {
    marginLeft: "auto",
    color: "grey",
  },
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    marginLeft: 5,
    color: "grey",
    fontWeight: "500",
  },
});

export default FeedPost;
