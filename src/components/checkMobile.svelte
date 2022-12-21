<script context="module">
  export function checkMobile() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)
    ) {
      return true;
    } else {
      return false;
    }
  }
</script>
