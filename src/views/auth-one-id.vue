<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { retrainService } from '../service/auth.service';
import StorageService from '../service/storage.service';

const route = useRoute();
const router = useRouter();

async function handleOneIDCallback() {
    const code = route.query.code as string;
    const state = route.query.state as string;

    if (!code || !state) return;

    try {
        const response = await retrainService.redirectUri(code, state);
        const token = response.data.access_token;
        const perms = response.data.perms;
        const lang = response.data.lang || 'uz';

        StorageService.setToken(token);
        StorageService.setPermissions(perms);
        StorageService.setLang(lang);

        router.push('/admin/profile');
    } catch (err) {
        alert('Error getting token: ' + err);
    }
}

onMounted(() => {
    if (route.query.code && route.query.state) {
        handleOneIDCallback();
    }
});
</script>
