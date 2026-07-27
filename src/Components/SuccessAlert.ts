import Swal from "sweetalert2"

export const fireSuccessToast = (title: string, text?: string) => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: `🎉 ${title}`,
    text: text || 'Thank you! We will get back to you shortly.',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    background: 'var(--card)',
    color: 'var(--foreground)',
    customClass: {
      popup: 'success-toast',
    },
  })
}
