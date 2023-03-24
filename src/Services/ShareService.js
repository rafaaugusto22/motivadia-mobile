import { Share } from 'react-native';


export default class ShareService {

    static onShare = async (item) => {
        const url = "https://raapps.com.br"
        try {
          const result = await Share.share({
            title: "MotivaDia",
            url: url,
            message:
            '\"'+item.mensagem+'\" ('+item.autor+') \n https://play.google.com/store/apps/details?id=br.com.motivadia',
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
  }