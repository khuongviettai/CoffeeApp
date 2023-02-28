import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {sizes, spacing} from '../../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const Policy = () => {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: sizes.h2,
          textAlign: 'center',
          marginTop: spacing.m,
          fontWeight: 'bold',
        }}>
        CHÍNH SÁCH BẢO MẬT THÔNG TIN
      </Text>
      <View
        style={{
          width: windowWidth - spacing.l * 2,
          marginHorizontal: spacing.l,
          marginVertical: spacing.l + spacing.m,
        }}>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            BẢO MẬT THÔNG TIN
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Chính sách bảo mật thông tin (“Chính sách bảo mật” hoặc “Chính
            sách”) này bao gồm các quy định liên quan đến việc thu thập, sử
            dụng, tiết lộ và/hoặc xử lý Thông Tin Khách Hàng (như được định
            nghĩa bên dưới) mà Quý khách đã cung cấp cho Công ty CP TM dịch vụ
            trà cà phê CN (“Công ty”) hoặc Công ty lưu giữ của Quý khách trong
            quá trình Quý khách đăng ký tài khoản, mua hàng, sử dụng các sản
            phẩm và dịch vụ của Công ty (“Sản Phẩm - Dịch Vụ”), hoặc khi Quý
            khách giao dịch với Công ty thông qua https://thecoffeehouse.com
            (“WEBSITE”). Chính sách này cũng quy định về nghĩa vụ của Công ty
            đối với Thông Tin Khách Hàng cũng như sự chấp thuận của Quý khách
            đối với việc thu thập, sử dụng, tiết lộ và/hoặc xử lý Thông Tin
            Khách Hàng của Công ty.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            THÔNG TIN KHÁCH HÀNG
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Thông tin khách hàng (“Thông Tin Khách Hàng”) bao gồm nhưng không
            giới hạn ở:
            {'\n\n'}
            Thông tin Quý khách cung cấp cho Công ty:
            {'\n\n'}
            Thông tin này bao gồm nhưng không giới hạn ở họ và tên, địa chỉ
            email, số điện thoại, địa chỉ giao hàng, tài khoản ngân hàng và
            thông tin thanh toán, thông tin trên biểu mẫu, tờ khai, đơn đăng ký,
            phiếu khảo sát, đơn phản hồi hoặc khiếu nại (dù trực tuyến hay bằng
            hình thức khác), các thông tin được gửi bởi hoặc cung cấp thông qua
            các thiết bị được sử dụng để truy cập vào WEBSITE, hoặc các thông
            tin mà Quý khách chủ động gửi đến cho Công ty. Thông tin có được do
            sự tương tác của Quý khách với Công ty:
            {'\n\n'}
            Thông tin này bao gồm bất kỳ thông tin nào khác về Quý khách khi Quý
            khách trao đổi với Công ty qua bất kỳ phương tiện nào (điện thoại,
            thư từ, fax, gặp gỡ trực tiếp, email, mạng xã hội, các ứng dụng),
            đăng nhập và sử dụng Sản Phẩm - Dịch Vụ hoặc tương tác thông qua
            WEBSITE, kể cả việc Quý khách đã sử dụng như thế nào. Thông tin về
            Quý khách mà Công ty tổng hợp hoặc có được từ những nguồn khác (nếu
            có).
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            SỰ CHẤP THUẬN CỦA KHÁCH HÀNG
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Khi sử dụng Sản Phẩm - Dịch Vụ và/hoặc tương tác với Công ty, Quý
            khách xác nhận và đồng ý rằng Quý khách chấp nhận các quy định của
            Chính sách bảo mật này, và Quý khách đồng ý cho Công ty thu thập, sử
            dụng, tiết lộ và/hoặc xử lý Thông Tin Khách Hàng theo quy định mô tả
            trong đây. TRONG TRƯỜNG HỢP QUÝ KHÁCH KHÔNG ĐỒNG Ý VỚI CHÍNH SÁCH
            BẢO MẬT NÀY, QUÝ KHÁCH CÓ THỂ CÂN NHẮC DỪNG CUNG CẤP THÔNG TIN KHÁCH
            HÀNG CHO CÔNG TY; TỰ ĐĂNG NHẬP TÀI KHOẢN ĐỂ KIỂM TRA, CẬP NHẬT, ĐIỀU
            CHỈNH THÔNG TIN KHÁCH HÀNG HOẶC YÊU CẦU CÔNG TY THỰC HIỆN VIỆC NÀY.
            Chính sách bảo mật này có thể được sửa đổi, bổ sung nhằm hoàn thiện
            vào từng thời điểm, Công ty khuyến khích Quý khách thường xuyên xem
            lại để được cập nhật và bảo vệ quyền lợi của mình.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            MỤC ĐÍCH SỬ DỤNG THÔNG TIN
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Thông Tin Khách Hàng chỉ được Công ty sử dụng cho một hoặc tất cả
            các mục đích (“Mục Đích”) sau đây: Xử lý đơn đặt hàng và cung cấp
            Sản Phẩm - Dịch Vụ cho Quý khách;{'\n\n'}
            Cung cấp thông tin, chính sách, tiến độ mua bán liên quan đến Sản
            Phẩm - Dịch Vụ; hỗ trợ khi Quý khách có yêu cầu Xác nhận và thực
            hiện các giao dịch tài chính liên quan đến các khoản thanh toán trực
            tuyến của Quý khách khi Quý khách sử dụng Sản Phẩm - Dịch Vụ; Gửi
            thông tin sản phẩm, dịch vụ mới, các ưu đãi dành riêng cho Quý
            khách;{'\n\n'}
            Cập nhật về các sự kiện sắp tới, chương trình ưu đãi hoặc thông tin
            tuyển dụng nếu Quý khách đăng ký nhận email/sms thông báo; Lấy ý
            kiến khảo sát của Quý khách, nếu Quý khách đăng ký nhận email/sms
            thông báo; Phân tích, đánh giá và nâng cao chất lượng Sản Phẩm -
            Dịch Vụ;{'\n\n'}
            Cải thiện trải nghiệm của người dùng trên WEBSITE hoặc đối với Sản
            Phẩm - Dịch Vụ; Hỗ trợ Quý khách trong quá trình bảo hành, đổi trả
            hoặc hoàn tiền (tùy theo chính sách của Công ty vào từng thời điểm);
            Giải quyết các tranh chấp, khiếu nại liên quan;{'\n\n'}
            Ngăn ngừa các hoạt động phá hủy tài khoản của Quý khách hoặc giả mạo
            Quý khách;{'\n\n'}
            Theo yêu cầu của cơ quan nhà nước có thẩm quyền hoặc theo quy định
            của pháp luật vào từng thời điểm.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            ĐỐI TƯỢNG TIẾP CẬN THÔNG TIN KHÁCH HÀNG
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Trừ trường hợp pháp luật Việt Nam có quy định khác, chỉ những đối
            tượng dưới đây mới được tiếp cận Thông Tin Khách Hàng:
            {'\n\n'}
            Cơ quan nhà nước có thẩm quyền như Viện kiểm sát, tòa án, cơ quan
            công an điều tra, khi có yêu cầu cụ thể theo quy định của pháp luật
            Việt Nam;
            {'\n\n'}
            Ngân hàng hoặc các Tổ chức thẻ Visa/Mastercard liên quan đến hành vi
            vi phạm pháp luật hoặc gian lận thẻ tín dụng liên quan đến Khách
            hàng; và/hoặc Công ty, công ty mẹ, công ty con, công ty liên kết của
            Công ty, đại lý, nhà thầu, đơn vị cung cấp dịch vụ của Công ty, hoặc
            bên thứ ba, có liên quan đến việc Công ty cung cấp Sản Phẩm - Dịch
            Vụ cho Quý khách mới được tiếp cận Thông Tin Khách Hàng để thực hiện
            Mục Đích như quy định bên trên.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            THỜI GIAN LƯU TRỮ
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Thông Tin Khách Hàng được lưu trữ cho đến khi Quý khách có yêu cầu
            Công ty hủy bỏ, hoặc Quý khách tự đăng nhập và hủy bỏ thông tin.
            Trong mọi trường hợp, Thông Tin Khách Hàng được lưu trữ và bảo mật
            trên máy chủ của Công ty.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Policy;
