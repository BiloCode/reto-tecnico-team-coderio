import Swal from "sweetalert2";

const useRemoveThis = () => {
  
  const isRemove = async () => {
    try {
      const result = await Swal.fire({
        title: "Eliminar registro",
        text: "¿Estás seguro que deseas eliminar esta zona horaria?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Estoy de acuerdo"
      });

      return result.value;
    } catch (e) {
      console.log(e);
    }
  };

  return isRemove;
};

export default useRemoveThis;