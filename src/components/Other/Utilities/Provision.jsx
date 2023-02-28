import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {sizes, spacing} from '../../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const Provision = () => {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: sizes.h2,
          textAlign: 'center',
          marginTop: spacing.m,
          fontWeight: 'bold',
        }}>
        ĐIỀU KHOẢN SỬ DỤNG
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
            Giới thiệu
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Khi khách hàng truy cập vào ứng dụng The Coffee House, website
            vtcoffee.com hoặc đặt hàng qua hotline 0945034118 của V&T Coffee có
            nghĩa là khách hàng đã đồng ý với các điều khoản này. The Coffee
            House có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần
            nào trong Điều khoản sử dụng này vào bất cứ lúc nào. Các thay đổi có
            hiệu lực ngay khi được đăng trên trang web, ứng dụng mà không cần
            thông báo trước. Khi khách hàng tiếp tục sử dụng dịch vụ giao hàng
            của The Coffee House, sau khi các thay đổi về Điều khoản này được
            đăng tải, có nghĩa là khách hàng chấp nhận với những thay đổi đó.
            {'\n\n'}
            Khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi
            của chúng tôi.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            Chính sách sử dụng dịch vụ
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Khách hàng được quyền chủ động chọn loại dịch vụ để sử dụng khi bắt
            đầu đặt đơn hàng
            {'\n\n'}
            Với đơn hàng của dịch vụ "Giao hàng" và "Mang đi", khách hàng vui
            lòng không sử dụng tại Cửa hàng.
            {'\n\n'}
            The Coffee House có quyền từ chối hỗ trợ giao hàng với đơn hàng của
            dịch vụ “Mang đi”.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            Chấp nhận đơn hàng và giá cả
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            The Coffee House có quyền từ chối hoặc hủy đơn hàng của khách hàng
            vì bất kỳ lý do gì liên quan đến lỗi kỹ thuật, hệ thống một cách
            khách quan sau khi đã liên hệ thông báo với khách hàng. Trường hợp
            liên hệ 3 lần liên tục không thành công trong vòng 30 phút, chúng
            tôi sẽ tự động hủy đơn hàng của quý khách. The Coffee House rất tiếc
            vì chưa thể hoàn thành đơn hàng của quý khách trong trường hợp này.
            {'\n\n'}
            The Coffee House cam kết sẽ cung cấp thông tin giá cả chính xác nhất
            cho khách hàng. Tuy nhiên, đôi lúc vẫn có sai sót xảy ra, ví dụ như
            trường hợp giá sản phẩm không hiển thị chính xác trên trang web hoặc
            sai giá, tùy theo từng trường hợp chúng tôi sẽ liên hệ hướng dẫn
            hoặc thông báo hủy đơn hàng đó cho khách hàng.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            Thay đổi thông tin đặt hàng
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Khách hàng vui lòng cung cấp thông tin đầy đủ và chính xác ngay khi
            hoàn tất đặt hàng trên tại The Coffee House.
            {'\n\n'}
            The Coffee House chỉ chấp nhận thay đổi thông tin trên đơn hàng bao
            gồm: địa chỉ giao hàng, sản phẩm trong giỏ hàng, thông tin người
            nhận, thời gian giao nhận trước bước Thực hiện đơn hàng trên ứng
            dụng. Tùy thuộc từng trường hợp có thể hỗ trợ khách hàng sau khi
            kiểm tra với cửa hàng thực hiện đơn hàng và đơn vị vận chuyển, The
            Coffee House sẽ liên hệ thông tin cho khách hàng hoặc có quyền từ
            chối hỗ trợ.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            Hủy bỏ Đặt hàng
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Khách hàng được quyền chủ động hủy đơn hàng trên ứng dụng đối với
            trường hợp đơn hàng chưa có tài xế nhận giao hàng
            {'\n\n'}
            Khách hàng vui lòng liên hệ hotline 18006936 để hủy đơn hàng với các
            trường hợp: Đơn hàng đã có tài xế nhận giao hàng (từ bước Đã tìm
            thấy tài xế trên ứng dụng)
            {'\n\n'}
            Đơn hàng sẽ được trả về cửa hàng nếu nhân viên giao hàng không liên
            lạc được với Khách hàng tại thời điểm giao hàng (tối đa 3 cuộc gọi)
            {'\n\n'}
            Với trường hợp Đã giao đơn hàng đến địa chỉ yêu cầu, tuy nhiên không
            liên hệ được người nhận trong vòng 30 phút kể từ tài xế trả hàng về
            cửa hàng:
            {'\n\n'}- Đơn thanh toán COD: Đơn hàng sẽ được hủy và hủy bỏ việc
            tích điểm cho đơn hàng này.
            {'\n\n'}- Đơn đã thanh toán Online: Không hoàn tiền, The Coffee
            House sẽ lưu giữ đơn hàng và chỉ hỗ trợ giao lại đơn hàng trong ngày
            cho khách hàng (The Coffee House chưa thể đảm bảo về chất lượng sản
            phẩm nếu thời gian giao hàng hơn 30 phút)
            {'\n\n'}
            The Coffee House sẽ có toàn quyền không thực hiện đặt hàng của
            {'\n\n'}- Địa chỉ được chọn nằm ngoài khu vực giao hàng được cung
            cấp trên ứng dụng;
            {'\n\n'}- Không liên lạc được với khách hàng qua điện thoại vào thời
            điểm xác nhận đặt hàng;
            {'\n\n'}- Không thực hiện được đơn hàng của khách hàng do thiếu
            thông tin, chỉ dẫn hoặc ủy quyền từ khách hàng tại thời điểm giao
            hàng
            {'\n\n'}- Không có sẵn tất cả các mặt hàng khách hàng đặt mua tại
            thời điểm đặt hàng.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            Phương thức thanh toán
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Thanh toán tiền mặt (COD): thanh toán khi giao hàng.
            {'\n\n'}
            Thanh toán trực tuyến bằng thẻ nội địa (ATM)
            {'\n\n'}
            Thanh toán trực tuyến bằng các ví điện tử như Paypal...
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            Chính sách Tài khoản Người dùng
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Khách hàng cam kết và cung cấp thông tin chính xác nhằm mục đích
            nhận được phục vụ tốt nhất từ The Coffee House
            {'\n\n'}
            Mỗi số điện thoại chỉ tạo được một (01) tài khoản cho mục đích sử
            dụng cá nhân.
            {'\n\n'}
            Để đảm bảo quyền lợi, khách hàng không chia sẻ thông tin tài khoản
            (tên truy cập và mật khẩu) cho người khác sử dụng tài khoản The
            Coffee House, hoặc chuyển nhượng tài khoản cho bất kỳ ai khác mà
            chưa thông qua The Coffee House
            {'\n\n'}
            The Coffee House có quyền khóa tài khoản hoặc khóa một phần tính
            năng của tài khoản (như tính năng Đặt hàng/ Tích điểm..) của khách
            hàng khi The Coffee House phát hiện khách hàng vi phạm điều khoản
            hoặc chính sách của công ty hoặc có hành vi mua hàng không trung
            thực điển hình như:
            {'\n\n'}- Tạo các đơn hàng ảo, boom hàng hoặc đánh giá ảo.
            {'\n\n'}- Có dấu hiệu lừa đảo hoặc lạm dụng các mã giảm giá và
            chương trình khuyến mãi để trục lợi
            {'\n\n'}- Các trường hợp khác mà hệ thống của The Coffee House phát
            hiện được. Tùy từng trường hợp, The Coffee House sẽ có biện pháp xử
            lý thích hợp, bao gồm khóa tài khoản mà không cần thông báo trước.
            {'\n\n'}
            Tài khoản bị khóa hoặc khóa một phần tính năng sẽ được cấp lại sau
            khi hoàn thành quá trình xác minh qua các chứng từ/thông tin khách
            hàng cung cấp chứng minh việc mua hàng (hóa đơn, hình ảnh sản phẩm
            đã mua,..) và có sự đồng thuận giữa khách hàng và The Coffee House.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            Chính sách hoàn tiền
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            The Coffee House rất tiếc khi đã không thể hoàn thành đơn hàng của
            khách hàng. Khách hàng có thể yên tâm về số tiền đã thanh toán. The
            Coffee House cùng với các đối tác Ví điện tử/Ngân hàng sẽ nhanh
            chóng hoàn tất thủ tục hoàn tiền.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            Phí vận chuyển
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Đơn hàng có tổng thanh toán sau khi chiết khấu khuyến mãi trên
            50.000đ được miễn phí vận chuyển.
            {'\n\n'}
            Đơn hàng có tổng thanh toán sau khi chiết khấu khuyến mãi dưới
            50.000đ sẽ cộng thêm 10.000đ phí giao hàng trực tiếp trên đơn hàng.
            {'\n\n'}
            (*) Vào những dịp lễ, Tết, The Coffee House có thể sẽ thêm khoản phụ
            thu trực tiếp vào đơn hàng, khoản phụ thu này sẽ hiển thị ngay trên
            màn hình Thanh toán trước khi hoàn tất đặt hàng.
            {'\n\n'}
            Phí vận chuyển sẽ được The Coffee House thanh toán cho tài xế, khách
            hàng KHÔNG thanh toán thêm bất cứ khoản phí vận chuyển riêng nào cho
            tài xế.
            {'\n\n'}
            Trường hợp tài xế yêu cầu khách hàng thanh toán thêm bất kỳ khoản
            nào khác ngoài tổng giá trị đơn hàng, khách hàng vui lòng liên hệ
            18006936 ngay để được hỗ trợ xử lý.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            Thời gian giao hàng
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Khung giờ giao hàng: 7h00 - 20h30
            {'\n\n'}
            Khung giờ khách hàng nhận hàng: 7:30 - 21h00
            {'\n\n'}
            Thời gian bộ phận Giao hàng tận nơi hỗ trợ: 7:00 - 21:00
            {'\n\n'}
            (*) Ngoài khung giờ dự kiến như trên, khung giờ giao hàng có thể
            thay đổi theo thời gian hoạt động của cửa hàng
            {'\n\n'}
            Tất cả đơn hàng đặt ngoài khung giờ giao hàng sẽ được tự động chuyển
            sang khung giờ giao hàng tiếp theo ( sớm nhất 7h30 ngày tiếp theo)
            {'\n\n'}
            Đối với đơn hàng Giao ngay, The Coffee House giao hàng trong vòng 30
            phút từ khi xác nhận đơn hàng.
            {'\n\n'}
            Đối với đơn hàng Hẹn giờ, The Coffee House giao hàng trong vòng 30
            phút so với thời gian hẹn giờ được chọn.
            {'\n\n'}
            Đối với các khu vực hơn 5km có xác nhận đồng ý của khách hàng về
            thời gian giao hàng hơn 30 phút, và đồng thuận về việc không đảm bảo
            chất lượng sản phẩm tốt nhất.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            Chính sách hoàn trả hàng
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Ngay tại thời điểm tài xế bàn giao sản phẩm cho khách hàng, khách
            hàng vui lòng tiến hành đồng kiểm tra sản phẩm với tài xế.
            {'\n\n'}
            Trường hợp sản phẩm không đúng hoặc sản phẩm bị hư hại, khách hàng
            có quyền từ chối nhận sản phẩm.
            {'\n\n'}
            Nếu tài xế không đồng ý nhận lại sản phẩm, khách hàng vui lòng liên
            hệ hotline 18006936 để được hỗ trợ ngay.
            {'\n\n'}
            Vậy, tất cả thức ăn và đồ uống bán trên The Coffee House sẽ không
            được hoàn lại khi khách hàng đã nhận và đã đồng ý nhận sản phẩm từ
            phía tài xế.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: sizes.h3,
              marginVertical: spacing.m,
              fontWeight: 'bold',
            }}>
            Khoảng cách giao hàng
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 23}}>
            Để đảm bảo chất lượng sản phẩm, The Coffee House chỉ hỗ trợ giao
            hàng trong phạm vi 5km từ địa chỉ cửa hàng gần nhất đến địa điểm
            khách hàng yêu cầu (khoảng cách tính theo đường bộ).
            {'\n\n'}
            The Coffee House có quyền từ chối yêu cầu giao hàng ngoài phạm vi
            5km. Trong một vài trường hợp ngoại lệ, The Coffee House có thể hỗ
            trợ giao hàng với khoảng cách tối đa là 6km khi nhận được thỏa thuận
            giữa phía tài xế và khách hàng (The Coffee House hiện chưa đảm bảo
            về chất lượng sản phẩm tốt nhất cho các đơn hàng có khoảng cách giao
            hàng xa hơn 5km, khách hàng vui lòng cân nhắc khi lựa chọn sản phẩm)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Provision;
