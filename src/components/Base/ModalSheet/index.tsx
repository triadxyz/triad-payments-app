import { useEffect, useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";

type Props = {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  children?: React.ReactNode;
};

export default function ModalSheet({
  openModal,
  setOpenModal,
  children,
}: Props) {
  const [openDelay, setOpenDelay] = useState(false);

  useEffect(() => {
    if (openModal) {
      setTimeout(() => {
        setOpenDelay(openModal);
      }, 300);
      return;
    }
  }, [openModal]);

  return (
    <Modal
      className="bg-transparent"
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        setOpenModal(false);
      }}
      visible={openModal}
    >
      {openDelay && (
        <TouchableOpacity
          onPress={() => {
            setOpenModal(false);
          }}
          className="bg-white opacity-70 w-full fixed inset-0 z-10 flex-1"
        ></TouchableOpacity>
      )}
      <View className="w-full h-[60%] bg-white mt-auto rounded-t-3xl z-20 absolute bottom-0 inset-0">
      <View className="rounded-full h-2 w-10 bg-gray-200 mx-auto mt-3"></View>
        {children}
      </View>
    </Modal>
  );
}
